'use client';

import React, { FC, useEffect } from 'react';
import { HeaderWithButtonBack, Loader, Tabs } from '../common';
import OrderSummary from './OrderSummary';
import TabDelivery from './TabDelivery';
import TabPickup from './TabPickup';
import { useLocalStorage, useOrder } from '@/hooks';
import { useAppDispatch, setCurrentUser, resetOrderFormData } from '@/redux';
import { Supply } from '@/types';

const OrderForm: FC = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = React.useState(false);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const { handleSubmitOrder } = useOrder();

  useEffect(() => {
    dispatch(resetOrderFormData());
    dispatch(setCurrentUser(userInLS));
    setMounted(true);
  }, [dispatch, userInLS]);

  if (!mounted) {
    return (
      <div className='grid place-items-center min-h-[calc(100vh-358px)]'>
        <Loader />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitOrder}>
      <section>
        <HeaderWithButtonBack text='Оформление заказа' />
        <Tabs
          contentFirst={<TabDelivery />}
          contentSecond={<TabPickup />}
          labelFirst={Supply.DELIVERY}
          labelSecond={Supply.PICKUP}
        />
      </section>
      <OrderSummary />
    </form>
  );
};

export default OrderForm;
