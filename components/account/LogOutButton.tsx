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
      className='btn_yellow block max-w-[250px]'
    >
      Выйти
    </Link>
  );
};

export default LogOutButton;
