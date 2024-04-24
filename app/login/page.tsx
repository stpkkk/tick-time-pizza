'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { OTPForm, PhoneForm, Recaptcha } from '@/components';
import { setOtp, useAppDispatch, useAppSelector } from '@/redux';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isOTPSent } = useAppSelector((state) => state.profileReducer);

  const handleClose = () => {
    router.push('/');
    dispatch(setOtp(''));
  };

  return (
    <main className='relative z-10 sm:px-4 mb-[90px]'>
      <Recaptcha>
        {isOTPSent ? (
          <OTPForm onClose={handleClose} />
        ) : (
          <PhoneForm onClose={handleClose} />
        )}
      </Recaptcha>
    </main>
  );
};

export default LoginPage;
