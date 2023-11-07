'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { OTPForm, PhoneForm } from '@/components';

const Login: React.FC = () => {
  const router = useRouter();
  const [isOTPForm, setOTPForm] = React.useState(false);
  const [phone, setPhone] = React.useState('');

  const handleClickToMainPage = () => {
    router.push('/');
  };

  return (
    <div className='content_container relative z-10 min-h-[calc(100vh-268px)] pt-[90px] sm:px-4'>
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
        {isOTPForm ? (
          <OTPForm
            handleClickToMainPage={handleClickToMainPage}
            phone={phone}
            setOTPForm={setOTPForm}
          />
        ) : (
          <PhoneForm
            handleClickToMainPage={handleClickToMainPage}
            setOTPForm={setOTPForm}
            setPhone={setPhone}
            phone={phone}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
