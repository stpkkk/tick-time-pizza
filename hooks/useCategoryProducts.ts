'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getGroupProducts } from '../utils/getGroupProducts';
import useLocalStorage from './useLocalStorage';
import { menu } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

function filterByCategoryTitle(categoryTitle: string) {
  return menu.filter(
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

  const getBookmarks = React.useCallback(async () => {
    setUserInLS(userInLS);
  }, [userInLS, setUserInLS]);

  React.useEffect(() => {
    getBookmarks();
  }, [getBookmarks]);

  switch (category) {
    case 'Избранное':
      return userInLS.bookmarks;
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
