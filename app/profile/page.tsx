'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Loader,
  ModalEditProfile,
  ModalTicketsInfo,
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
          <ProfileInfo user={user} />
          <Orders orders={user?.orders} />
          <ModalEditProfile user={user} />
          <ModalTicketsInfo />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default ProfilePage;
