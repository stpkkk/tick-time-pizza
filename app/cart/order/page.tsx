'use client';

import React from 'react';
import {
  ModalAddAddress,
  ModalOrderSuccess,
  ModalRemoveAddress,
  OrderForm,
} from '@/components';

const OrderPage: React.FC = () => {
  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      <OrderForm />
      <ModalAddAddress />
      <ModalRemoveAddress />
      <ModalOrderSuccess />
    </main>
  );
};

export default OrderPage;
