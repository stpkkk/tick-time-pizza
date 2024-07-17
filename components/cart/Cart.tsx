'use client';

import React from 'react';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import ProductsList from './ProductsList';
import Recommendations from './Recommendations';
import { useCart } from '@/hooks';

const Cart: React.FC = () => {
  const { cartProducts } = useCart();

  return (
    <div className='flex justify-between flex-row md:flex-col gap-[30px]'>
      <div className='flex flex-col max-w-[calc(100%-420px)] md:max-w-full'>
        <div className='flex w-full flex-row gap-[30px] sm:flex-col'>
          <div className='md:max-w-full w-full'>
            {cartProducts.length > 0 ? <ProductsList /> : <EmptyCart />}
          </div>
        </div>
        <Recommendations />
      </div>
      <CartTotal />
    </div>
  );
};

export default Cart;
