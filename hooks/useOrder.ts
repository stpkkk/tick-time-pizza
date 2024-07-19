'use client';

import React, { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { APP_CONFIG } from '@/config';
import {
  addToCart,
  addToOrders,
  resetOrderFormData,
  setCurrentUser,
  setModalOrderSuccessOpen,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { getFormattedDateTime } from '@/utils';

export const useOrder = () => {
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const { user, orders, orderFormData, orderPrice } = useAppSelector(
    (state) => state.profileReducer,
  );
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
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

  const handleSubmitOrder = useCallback(
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

  return { handleSubmitOrder, ticketsToAdd };
};
