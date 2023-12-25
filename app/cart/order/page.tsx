'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import {
  ModalAddAddress,
  OrderSummary,
  ButtonBack,
  TabDelivery,
  TabPickup,
  Tabs,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import { addToOrders, setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExtendedUser, SupplyType } from '@/types';

const Order: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pickPoint, orders, paymentMethod, cashChange, deliveryTime, user } =
    useAppSelector((state) => state.profileReducer);
  const router = useRouter();
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
      router.push('/profile');
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
      router,
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
              labelFirst={SupplyType.DELIVERY}
              labelSecond={SupplyType.PICKUP}
            />
          </section>
          {mounted ? (
            <>
              <OrderSummary />
              <OrderSummary />
            </>
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
