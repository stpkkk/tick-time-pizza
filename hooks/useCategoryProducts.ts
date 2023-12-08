'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getGroupProducts } from '../utils/getGroupProducts';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

function filterByCategoryTitle(products: IProduct[], categoryTitle: string) {
  return products.filter(
    (product) =>
      product.categories?.some((category) => category.title === categoryTitle),
  );
}

const useCategoryProducts = (category: string | number): IProduct[] => {
  const pathname = usePathname();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const productsGroup = getGroupProducts(pathname);

  const forChildrenArray = filterByCategoryTitle(menu, 'Подходит для Детей');
  const withoutMeatArray = filterByCategoryTitle(menu, 'Без Мяса');
  const hotArray = filterByCategoryTitle(menu, 'Острая');

  React.useEffect(() => {
    // Fetch any data
  }, [category]);

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

export default useCategoryProducts;
