'use client';

import React from 'react';
import ModalEditProfile from './ModalEditProfile';
import ModalTicketsInfo from './ModalTicketsInfo';
import NoOrders from './NoOrders';
import Orders from './Orders';
import ProfileInfo from './ProfileInfo';
import { useLocalStorage } from '@/hooks';
import { useAppSelector } from '@/redux/hooks';

const Profile: React.FC = () => {
  const { isModalEditProfileOpen, isModalTicketsInfo } = useAppSelector(
    (state) => state.profileReducer,
  );
  const [userInLS] = useLocalStorage({}, 'user');
  const isOrdersExist = userInLS?.orders && userInLS.orders.length > 0;

  return (
    <>
      <h1 className='title px-[60px] my-[30px] sm:my-4 sm:px-4'>Профиль</h1>
      <ProfileInfo />
      <section>
        <h2 className='title px-[60px] my-[30px] sm:my-4 sm:px-4'>
          Ваши заказы:
        </h2>
        {isOrdersExist ? <Orders orders={userInLS?.orders} /> : <NoOrders />}
      </section>
      {isModalEditProfileOpen ? <ModalEditProfile /> : null}
      {isModalTicketsInfo ? <ModalTicketsInfo /> : null}
    </>
  );
};

export default Profile;
