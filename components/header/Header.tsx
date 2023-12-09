'use client';

import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';

const Header: React.FC = () => {
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

export default Header;
