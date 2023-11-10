'use client';

import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '@/firebase';

const Account: React.FC = () => {
  const auth = getAuth(app);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
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
    </main>
  );
};

export default Account;
