'use client';

import { usePathname } from 'next/navigation';
import { getGroupProducts } from './getGroupProducts';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

function filterByCategoryTitle(menu: IProduct[], categoryTitle: string) {
  return menu.filter(
    (product) =>
      product.categories?.some((category) => category.title === categoryTitle),
  );
}

const forChildrenArray = filterByCategoryTitle(menu, 'Подходит для Детей');
const withoutMeatArray = filterByCategoryTitle(menu, 'Без Мяса');
const hotArray = filterByCategoryTitle(menu, 'Острая');

export const getCategoryProducts = (category: string | number): IProduct[] => {
  const pathname = usePathname();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const productsGroup = getGroupProducts(pathname);

  switch (category) {
    case 'Избранное':
      return bookmarks;
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
