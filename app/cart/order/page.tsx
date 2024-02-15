'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import {
  ButtonBack,
  ModalAddAddress,
  ModalOrderSuccess,
  ModalRemoveAddress,
  OrderSummary,
  TabDelivery,
  TabPickup,
  Tabs,
} from '@/components';
import { APP_CONFIG } from '@/config';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import {
  addToOrders,
  resetOrderFormData,
  setCurrentUser,
  setModalOrderSuccessOpen,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Supply } from '@/types';
import { getFormattedDateTime } from '@/utils';

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = React.useState(false);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const { user, orders, orderFormData, orderPrice } = useAppSelector(
    (state) => state.profileReducer,
  );
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

  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      {mounted ? (
        <form onSubmit={handleSubmitOrder}>
          <section>
            <div className='md:my-4 md:ml-4 flex flex-row gap-2 my-10 ml-6'>
              <ButtonBack />
              <h1 className='h1'>Оформление заказа</h1>
            </div>
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
          <CgSpinner
            size={70}
            className='text-yellow animate-spin sm:max-w-[40px] sm:h-[40px]'
          />
        </div>
      )}
      <ModalAddAddress />
      <ModalRemoveAddress />
      <ModalOrderSuccess />
    </main>
  );
};

export default OrderPage;
