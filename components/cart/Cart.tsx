'use client';

import React from 'react';
import CartTotal from './CartTotal';
import ProductsList from './ProductsList';
import Recommendations from './Recommendations';

const Cart: React.FC = () => {
  return (
    <div className='flex justify-between flex-row md:flex-col gap-[30px]'>
      <div className='flex flex-col max-w-[calc(100%-420px)] md:max-w-full w-full'>
        <ProductsList />
        <Recommendations />
      </div>
      <CartTotal />
    </div>
  );
};

export default Cart;
