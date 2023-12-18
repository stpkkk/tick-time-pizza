'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import {
  ModalAddAddress,
  OrderSummary,
  BackButton,
  TabDelivery,
  TabPickup,
  Tabs,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import { addToOrders, setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExtendedUser } from '@/types';

const Order: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pickPoint, orders, paymentMethod, cashChange, deliveryTime, user } =
    useAppSelector((state) => state.profileReducer);
  const [mounted, setMounted] = React.useState(false);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  const handleSubmitOrder = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const updatedOrder = {
        ...orders,
        paymentMethod,
        cashChange,
        tickets: 0,
        address: 'Ленина, 37',
        orderAccepted: '-',
        deliveryTime,
        pickPoint,
      };
      dispatch(addToOrders([...orders, updatedOrder]));

      const updatedUser: ExtendedUser = {
        ...user,
        orders: [...orders, updatedOrder],
      };

      dispatch(setCurrentUser(updatedUser));
      dispatch(addToCart([]));
      await setUserInLS(updatedUser);
    },
    [
      orders,
      paymentMethod,
      cashChange,
      deliveryTime,
      pickPoint,
      dispatch,
      user,
      setUserInLS,
    ],
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className='mt-[90px]'>
      {mounted ? (
        <>
          <form onSubmit={handleSubmitOrder}>
            <section>
              <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
                <BackButton />
                <h1 className='h1'>Оформление заказа</h1>
              </div>
              <Tabs
                contentFirst={<TabDelivery />}
                contentSecond={<TabPickup />}
                labelFirst='Доставка'
                labelSecond='Самовывоз'
              />
            </section>
            <OrderSummary />
          </form>
          <ModalAddAddress />
        </>
      ) : (
        <div className='grid place-items-center min-h-[calc(100vh-358px)]'>
          <CgSpinner
            size={70}
            className='text-yellow animate-spin sm:max-w-[40px] sm:h-[40px]'
          />
        </div>
      )}
    </main>
  );
};

export default Order;
