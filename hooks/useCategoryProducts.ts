'use client';

import { usePathname } from 'next/navigation';
import { getGroupProducts } from '../utils/getGroupProducts';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

function filterByCategoryTitle(categoryTitle: string) {
  return menu.filter(
    (product) =>
      product.categories?.some((category) => category.title === categoryTitle),
  );
}

const useCategoryProducts = (category: string | number): IProduct[] => {
  const pathname = usePathname();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const productsGroup = getGroupProducts(pathname);

  switch (category) {
    case 'Избранное':
      return bookmarks;
    case 'Без Мяса':
      return filterByCategoryTitle('Без Мяса');
    case 'Подходит для Детей':
      return filterByCategoryTitle('Подходит для Детей');
    case 'Острая':
      return filterByCategoryTitle('Острая');
    default:
      return productsGroup;
  }
};

export default useCategoryProducts;
