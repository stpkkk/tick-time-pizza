'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
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
import { TICKETS_PERCENT } from '@/config';
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
import { calculateTotalPrice, getFormattedDateTime } from '@/utils';

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const { user, orders, orderFormData } = useAppSelector(
    (state) => state.profileReducer,
  );
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const orderPrice = calculateTotalPrice(cartProductInLS).totalPrice;
  const orderTickets = Math.round(orderPrice * (TICKETS_PERCENT / 100));
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
  } = orderFormData;

  const handleSubmitOrder = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const newOrder = {
        id: randomId,
        products: cartProducts,
        date: formattedDate,
        time: formattedTime,
        orderPrice,
        paymentMethod,
        supplyMethod,
        pickPoint,
        cashChange,
        comment,
        deliveryAddress,
        orderTickets,
      };

      const updatedOrders = [...orders, newOrder];
      dispatch(addToOrders(updatedOrders));

      const updatedUser = {
        ...user,
        orders: updatedOrders,
        tickets: user?.tickets || 0 + orderTickets,
      };

      dispatch(setCurrentUser(updatedUser));
      await setUserInLS(updatedUser);
      await setCartProductInLS([]);
      dispatch(addToCart([]));
      await setUserInLS(updatedUser);
      dispatch(resetOrderFormData());
      dispatch(setModalOrderSuccessOpen(true));
    },
    [
      cartProducts,
      cashChange,
      comment,
      deliveryAddress,
      dispatch,
      formattedDate,
      formattedTime,
      orderPrice,
      orderTickets,
      orders,
      paymentMethod,
      pickPoint,
      randomId,
      setCartProductInLS,
      setUserInLS,
      supplyMethod,
      user,
    ],
  );

  React.useEffect(() => {
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
          <OrderSummary orderTickets={orderTickets} />
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
