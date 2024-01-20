'use client';

import { usePathname } from 'next/navigation';
import { getGroupProducts } from '../utils/getGroupProducts';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { CATEGORIES } from '@/types';

function filterByCategoryTitle(categoryTitle: string) {
  return menu.filter(
    (product) =>
      product.categories?.some((category) => category.title === categoryTitle),
  );
}

const useCategoryProducts = (category: string | number) => {
  const pathname = usePathname();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const productsGroup = getGroupProducts(pathname);

  switch (category) {
    case CATEGORIES.BOOKMARKS:
      return bookmarks;
    case CATEGORIES.VEGETARIAN:
      return filterByCategoryTitle(CATEGORIES.VEGETARIAN);
    case CATEGORIES.FOR_CHILDREN:
      return filterByCategoryTitle(CATEGORIES.FOR_CHILDREN);
    case CATEGORIES.SPICY:
      return filterByCategoryTitle(CATEGORIES.SPICY);
    default:
      return productsGroup;
  }
};

export default useCategoryProducts;
