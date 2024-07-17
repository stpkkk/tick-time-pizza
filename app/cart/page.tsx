import React from 'react';
import { Cart, HeaderWithButtonBack, ModalProduct } from '@/components';

const CartPage: React.FC = () => {
  return (
    <main className='mt-[90px]'>
      <HeaderWithButtonBack text='Корзина' />
      <Cart />
      <ModalProduct />
    </main>
  );
};

export default CartPage;
