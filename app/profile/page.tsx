'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import {
  ModalEditProfile,
  ModalTicketsInfo,
  NoOrders,
  Orders,
  ProfileInfo,
} from '@/components';
import { useLocalStorage } from '@/hooks';
import { setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const [mounted, setMounted] = React.useState(false);
  const isOrdersExist = userInLS?.orders && userInLS.orders.length > 0;
  const { user } = useAppSelector((state) => state.profileReducer);

  React.useEffect(() => {
    dispatch(setCurrentUser(userInLS));
    setMounted(true);
  }, [dispatch, userInLS]);

  React.useEffect(() => {
    if (!user && mounted) {
      router.push('/login');
    }
  }, [router, mounted, user]);

  return (
    <main className='mt-[90px] sm:mt-[70px] sm:px-4'>
      {mounted ? (
        <>
          <h1 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>Профиль</h1>
          <div>
            <ProfileInfo user={user} />
          </div>
          <section>
            <h2 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>
              Ваши заказы:
            </h2>
            {isOrdersExist ? <Orders orders={user?.orders} /> : <NoOrders />}
          </section>
          <ModalEditProfile user={user} />
          <ModalTicketsInfo />
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

export default ProfilePage;
