'use client';

import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useLocalStorage } from '@/hooks';
import { useAppDispatch, addToCart } from '@/redux';

const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  React.useEffect(() => {
    if (cartProductInLS) {
      dispatch(addToCart(cartProductInLS));
    }
  }, [dispatch, cartProductInLS]);

  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default AppHeader;
