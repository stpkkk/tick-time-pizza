'use client';

import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '@/firebase';
import { setOtpSent } from '@/redux/features/loginSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Account: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const router = useRouter();
  const { user } = useAppSelector((state) => state.loginReducer);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setOtpSent(false));
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className='content_container h-[calc(100vh-268px)] pt-[120px]'>
      <button className='btn_red max-w-sm' type='button' onClick={handleLogout}>
        Logout
      </button>
      <div className=''>{user?.phoneNumber}</div>
    </main>
  );
};

export default Account;
