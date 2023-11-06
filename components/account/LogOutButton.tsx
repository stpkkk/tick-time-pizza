'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const LogOutButton: React.FC = () => {
  const session = useSession();

  const handleClickLogOut = () => {
    session?.data && signOut({ callbackUrl: '/' });
  };
  return (
    <Link
      href='#'
      onClick={handleClickLogOut}
      className='bg-red-300 font-bold p-4 block'
    >
      Выйти
    </Link>
  );
};

export default LogOutButton;
