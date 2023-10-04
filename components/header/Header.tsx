'use client';

import React, { useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { addToCart } from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      dispatch(addToCart(parsedItems));
    }
  }, [dispatch]);

  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
