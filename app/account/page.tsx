import React from 'react';
import { AccountInfo, ModalEditProfile, NoOrders } from '@/components';

const Account: React.FC = () => {
  return (
    <main className='content_container min-h-[calc(100vh-268px)] pt-[90px] sm:px-4 '>
      <h1 className='h1 px-[60px] my-[30px] sm:my-4'>Профиль</h1>
      <AccountInfo />
      <h2 className='h1 px-[60px] my-[30px] sm:my-4'>Ваши заказы:</h2>
      <NoOrders />
      <ModalEditProfile />
    </main>
  );
};

export default Account;
