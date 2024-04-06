'use client';

import React from 'react';
import {
  Loader,
  ModalAddAddress,
  ModalOrderSuccess,
  ModalRemoveAddress,
  OrderForm,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import {
  resetOrderFormData,
  setCurrentUser,
} from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = React.useState(false);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  React.useEffect(() => {
    dispatch(resetOrderFormData());
    dispatch(setCurrentUser(userInLS));
    setMounted(true);
  }, [dispatch, userInLS]);

  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      {mounted ? <OrderForm /> : <Loader />}
      <ModalAddAddress />
      <ModalRemoveAddress />
      <ModalOrderSuccess />
    </main>
  );
};

export default OrderPage;
