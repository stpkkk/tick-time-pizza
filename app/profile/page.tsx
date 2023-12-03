'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import {
  ProfileInfo,
  ModalEditProfile,
  NoOrders,
  Orders,
  ModalTicketsInfo,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import { useAppSelector } from '@/redux/hooks';

const Profile: React.FC = () => {
  const { isModalEditProfileOpen, isModalTicketsInfo } = useAppSelector(
    (state) => state.profileReducer,
  );
  const [userInLS] = useLocalStorage({}, 'user');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isOrdersExist = userInLS?.orders && userInLS.orders.length > 0;

  return (
    <main className='content_container min-h-[calc(100vh-358px)] mt-[90px] sm:mt-[70px] sm:px-4'>
      {mounted ? (
        <>
          <h1 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>Профиль</h1>
          <ProfileInfo />
          <h2 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>
            Ваши заказы:
          </h2>
          {isOrdersExist ? <Orders orders={userInLS?.orders} /> : <NoOrders />}
          {isModalEditProfileOpen ? <ModalEditProfile /> : null}
          {isModalTicketsInfo ? <ModalTicketsInfo /> : null}
        </>
      ) : (
        <div className='grid min-h-[calc(100vh-358px)] place-items-center'>
          <CgSpinner size={70} className='text-yellow animate-spin' />
        </div>
      )}
    </main>
  );
};

export default Profile;
