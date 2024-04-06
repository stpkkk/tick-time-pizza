import React from 'react';
import {
  Cart,
  CartTotal,
  HeaderWithButtonBack,
  ModalProduct,
  Recommendations,
} from '@/components';

const CartPage: React.FC = () => {
  return (
    <main className='mt-[90px]'>
      <HeaderWithButtonBack text='Корзина' />
      <div className='flex justify-between flex-row md:flex-col gap-[30px]'>
        <div className='flex flex-col max-w-[calc(100%-420px)] md:max-w-full'>
          <Cart />
          <Recommendations />
        </div>
        <CartTotal />
      </div>
      <ModalProduct />
    </main>
  );
};

export default CartPage;
