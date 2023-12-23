'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { ProfileInfo, ModalEditProfile, NoOrders, Orders, ModalTicketsInfo } from '@/components';
import { useLocalStorage } from '@/hooks';

const Profile: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const [mounted, setMounted] = React.useState(false);
  const isOrdersExist = userInLS?.orders && userInLS.orders.length > 0;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className='mt-[90px] sm:mt-[70px] sm:px-4'>
      {mounted ? (
        <>
          <h1 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>Профиль</h1>
          <ProfileInfo />
          <section>
            <h2 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>
              Ваши заказы:
            </h2>
            {isOrdersExist ? (
              <Orders orders={userInLS?.orders} />
            ) : (
              <NoOrders />
            )}
          </section>
          <ModalEditProfile />
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

export default Profile;