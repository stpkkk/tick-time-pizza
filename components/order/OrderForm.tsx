'use client';

import React, { FC } from 'react';
import { HeaderWithButtonBack, Loader, Tabs } from '../common';
import OrderSummary from './OrderSummary';
import TabDelivery from './TabDelivery';
import TabPickup from './TabPickup';
import { APP_CONFIG } from '@/config';
import { useLocalStorage } from '@/hooks';
import {
  useAppSelector,
  useAppDispatch,
  addToOrders,
  setCurrentUser,
  addToCart,
  resetOrderFormData,
  setModalOrderSuccessOpen,
} from '@/redux';
import { Supply } from '@/types';
import { getFormattedDateTime } from '@/utils';

const OrderForm: FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const { user, orders, orderFormData, orderPrice } = useAppSelector(
    (state) => state.profileReducer,
  );
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const ticketsToAdd = Math.round(
    (orderPrice - (orderFormData.ticketsToUse || 0)) *
      (APP_CONFIG.TICKETS_PERCENT / 100),
  );
  const randomId = Math.floor(
    Math.random() * (Math.floor(9999) - Math.ceil(1000)) + Math.ceil(1000),
  ).toString();
  const { formattedDate, formattedTime } = getFormattedDateTime();
  const {
    paymentMethod,
    supplyMethod,
    pickPoint,
    cashChange,
    comment,
    deliveryAddress,
    ticketsToUse,
  } = orderFormData;

  const handleSubmitOrder = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const newOrder = {
        id: randomId,
        products: cartProducts,
        date: formattedDate,
        time: formattedTime,
        price: orderPrice - (ticketsToUse || 0),
        paymentMethod,
        supplyMethod,
        pickPoint,
        cashChange,
        comment,
        deliveryAddress,
        ticketsToAdd,
        ticketsToUse,
      };

      const tickets = (user?.tickets || 0) + ticketsToAdd - (ticketsToUse || 0);

      const updatedOrders = [...orders, newOrder];
      dispatch(addToOrders(updatedOrders));

      const updatedUser = {
        ...user,
        tickets,
        orders: updatedOrders,
      };

      dispatch(setCurrentUser(updatedUser));
      await setUserInLS(updatedUser);
      await setCartProductInLS([]);
      dispatch(addToCart([]));
      dispatch(resetOrderFormData());
      dispatch(setModalOrderSuccessOpen(true));
    },
    [
      randomId,
      cartProducts,
      formattedDate,
      formattedTime,
      orderPrice,
      ticketsToUse,
      paymentMethod,
      supplyMethod,
      pickPoint,
      cashChange,
      comment,
      deliveryAddress,
      ticketsToAdd,
      user,
      orders,
      dispatch,
      setUserInLS,
      setCartProductInLS,
    ],
  );

  React.useEffect(() => {
    dispatch(resetOrderFormData());
    dispatch(setCurrentUser(userInLS));
    setMounted(true);
  }, [dispatch, userInLS]);

  return mounted ? (
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
      <OrderSummary ticketsToAdd={ticketsToAdd} />
    </form>
  ) : (
    <div className='grid place-items-center min-h-[calc(100vh-358px)]'>
      <Loader />
    </div>
  );
};

export default OrderForm;
