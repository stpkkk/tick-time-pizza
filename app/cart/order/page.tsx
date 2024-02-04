'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import {
  ButtonBack,
  ModalAddAddress,
  ModalRemoveAddress,
  OrderSummary,
  TabDelivery,
  TabPickup,
  Tabs,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import {
  addToOrders,
  resetOrderFormData,
  setCurrentUser,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Supply } from '@/types';
import { calculateTotalPrice, getFormattedDateTime } from '@/utils';

const Order: React.FC = () => {
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

      const updatedOrders = [...orders, newOrder];
      dispatch(addToOrders(updatedOrders));

      const updatedUser = {
        ...user,
        orders: updatedOrders,
      };

      dispatch(addToCart([]));
      await setCartProductInLS([]);
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
      orders,
      paymentMethod,
      pickPoint,
      router,
      setCartProductInLS,
      setUserInLS,
      supplyMethod,
      tickets,
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
            <div className='flex flex-row gap-2 my-10 ml-6 md:my-4 md:ml-4'>
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
          <OrderSummary />
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
    </main>
  );
};

export default Order;
