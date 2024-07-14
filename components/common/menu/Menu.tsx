'use client';

import React, { useEffect } from 'react';
import { ModalProduct } from '../modal-product';
import Banner from './Banner';
import Categories from './Categories';
import ProductsList from './ProductsList';
import { useLocalStorage, useProducts } from '@/hooks';
import { useAppDispatch, addToBookmarks, setCurrentUser } from '@/redux';

const GRID_CLASS =
  'grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4';

const Menu: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userInLS) {
      dispatch(addToBookmarks(userInLS.bookmarks));
      dispatch(setCurrentUser(userInLS));
    }
  }, [dispatch, userInLS]);

  const { products } = useProducts();

  return (
    <>
      <Banner />
      <Categories />
      <ProductsList products={products} GRID_CLASS={GRID_CLASS} />
      <ModalProduct />
    </>
  );
};

export default Menu;
