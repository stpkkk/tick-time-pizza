'use client';

import React from 'react';
import { BackButton, Cart } from '@/components';

const CartPage: React.FC = () => {
  return (
    <div className='content_container min-h-[calc(100vh-268px)] pt-[90px] sm:pt-[70px]'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <div className='h1'>Корзина</div>
      </div>
      <Cart />
      <div className='h1 my-10 ml-[60px] sm:my-4 sm:ml-4'>Рекомендуем:</div>
    </div>
  );
};

export default CartPage;
