import React from 'react';
import { LogOutButton, UserInfo } from '@/components/account';

const Account = () => {
  return (
    <div className='content_container h-[calc(100vh-268px)] pt-[120px]'>
      <UserInfo />
      <LogOutButton />
    </div>
  );
};

export default Account;
