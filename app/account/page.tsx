import React from 'react';
import { ProfileInfo, ModalEditProfile, NoOrders } from '@/components';

const Profile: React.FC = () => {
  return (
    <main className='content_container min-h-[calc(100vh-268px)] pt-[90px] sm:px-4 '>
      <h1 className='h1 px-[60px] my-[30px] sm:my-4'>Профиль</h1>
      <ProfileInfo />
      <h2 className='h1 px-[60px] my-[30px] sm:my-4'>Ваши заказы:</h2>
      <NoOrders />
      <ModalEditProfile />
    </main>
  );
};

export default Profile;
