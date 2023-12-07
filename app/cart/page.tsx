'use client';

import React from 'react';
import { BackButton, Cart, CartTotal, Tabs } from '@/components';

const CartPage: React.FC = () => {
  return (
    <main className='mt-[90px]'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <h1 className='h1'>Корзина</h1>
      </div>
      <div className='flex justify-between flex-row md:flex-col gap-[30px]'>
        <div className='flex flex-col max-w-[calc(100%-420px)] md:max-w-full'>
          <Cart />
          <h2 className='h1 my-10 ml-[60px] sm:my-4 sm:ml-4'>Рекомендуем:</h2>
          <Tabs />
        </div>
        <CartTotal />
      </div>
    </main>
  );
};

export default CartPage;
