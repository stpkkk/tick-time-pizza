'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import {
  ButtonBack,
  ModalAddAddress,
  OrderSummary,
  TabDelivery,
  TabPickup,
  Tabs,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import { addToOrders, resetOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Supply } from '@/types';
import { getFormattedDateTime } from '@/utils';

const Order: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, orderFormData, orderPrice } = useAppSelector(
    (state) => state.profileReducer,
  );
  const { cartProducts } = useAppSelector((state) => state.menuReducer);

  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const { formattedDate, formattedTime } = getFormattedDateTime();
  const {
    paymentMethod,
    supplyMethod,
    pickPoint,
    tickets,
    cashChange,
    comment,
    deliveryAddress,
  } = orderFormData;

  const handleSubmitOrder = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const randomId = Math.floor(
        Math.random() * (Math.floor(9999) - Math.ceil(1000)) + Math.ceil(1000),
      ).toString();

      const newOrder = {
        id: randomId,
        products: cartProducts,
        date: formattedDate,
        time: formattedTime,
        orderPrice,
        paymentMethod,
        supplyMethod,
        pickPoint,
        tickets,
        cashChange,
        comment,
        deliveryAddress,
      };

      const updatedOrders = [...userInLS?.orders, newOrder];

      dispatch(addToOrders(updatedOrders));

      const updatedUser = {
        ...user,
        orders: updatedOrders,
      };

      dispatch(addToCart([]));
      await setUserInLS(updatedUser);
      router.push('/profile');
      dispatch(resetOrderFormData());
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
      paymentMethod,
      pickPoint,
      router,
      setUserInLS,
      supplyMethod,
      tickets,
      user,
      userInLS?.orders,
    ],
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className='mt-[90px]'>
      <>
        <form onSubmit={handleSubmitOrder}>
          <section>
            <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
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
          {mounted ? (
            <OrderSummary />
          ) : (
            <div className='grid place-items-center min-h-[calc(100vh-358px)]'>
              <CgSpinner
                size={70}
                className='text-yellow animate-spin sm:max-w-[40px] sm:h-[40px]'
              />
            </div>
          )}
        </form>
        <ModalAddAddress />
      </>
    </main>
  );
};

export default Order;
