'use client';

import React, { useEffect } from 'react';
import { ModalProduct } from '../modal-product';
import Banner from './Banner';
import Categories from './Categories';
import ProductsList from './ProductsList';
import { useLocalStorage, useProducts } from '@/hooks';
import { useAppDispatch, addToBookmarks, setCurrentUser } from '@/redux';

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
      <ProductsList products={products} />
      <ModalProduct />
    </>
  );
};

export default Menu;
