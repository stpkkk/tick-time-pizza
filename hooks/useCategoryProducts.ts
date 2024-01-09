'use client';

import { usePathname } from 'next/navigation';
import { getGroupProducts } from '../utils/getGroupProducts';
import useLocalStorage from './useLocalStorage';
import { menu } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

function filterByCategoryTitle(products: IProduct[], categoryTitle: string) {
  return products.filter(
    (product) =>
      product.categories?.some((category) => category.title === categoryTitle),
  );
}

const useCategoryProducts = (category: string | number): IProduct[] => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const productsGroup = getGroupProducts(pathname);

  const forChildrenArray = filterByCategoryTitle(menu, 'Подходит для Детей');
  const withoutMeatArray = filterByCategoryTitle(menu, 'Без Мяса');
  const hotArray = filterByCategoryTitle(menu, 'Острая');

  // React.useEffect(() => {
  //   dispatch(addToBookmarks(userInLS?.bookmarks));
  // }, [category, dispatch, userInLS.bookmarks]);

  switch (category) {
    case 'Избранное':
      return userInLS.bookmarks || bookmarks;
    case 'Без Мяса':
      return withoutMeatArray;
    case 'Подходит для Детей':
      return forChildrenArray;
    case 'Острая':
      return hotArray;
    default:
      return productsGroup;
  }
};

export default useCategoryProducts;
