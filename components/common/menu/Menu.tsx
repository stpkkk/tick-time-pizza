'use client';

import React, { useEffect } from 'react';
import Loader from '../Loader';
import { ModalProduct } from '../modal-product';
import Banner from './Banner';
import CardList from './CardList';
import Categories from './Categories';
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

  const { products, isLoading } = useProducts();

  return (
    <>
      <Banner />
      <Categories />
      <CardList
        products={products}
        isLoading={isLoading}
        GRID_CLASS={GRID_CLASS}
      />
      <ModalProduct />
    </>
  );
};

export default Menu;
