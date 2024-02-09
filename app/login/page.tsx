'use client';

import React from 'react';
import { RecaptchaVerifier, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { OTPForm, PhoneForm } from '@/components';
import { app_firebase } from '@/firebase/config';
import { setOtp } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExtendedWindow } from '@/types';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = getAuth(app_firebase);
  const { isOTPSent } = useAppSelector((state) => state.profileReducer);

  React.useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (res: null) => {
          // Handle reCAPTCHA response
        },
        'expired-callback': () => {
          // Handle reCAPTCHA expiration
        },
      },
    );

    (window as ExtendedWindow).recaptchaVerifier = recaptchaVerifier;
  }, [auth]);

  const handleClose = () => {
    router.push('/');
    dispatch(setOtp(''));
  };

  return (
    <main className='relative z-10 sm:px-4 mb-[90px]'>
      <div className='fixed inset-0 min-h-full p-4 overflow-y-auto flex_center sm:items-stretch sm:p-0 sm:text-center'>
        <div className='overlay' />
        <div
          id='recaptcha-container'
          data-sitekey='6lcsaxsdaaaaaebn0spdcencnu9564misyrudzd_'
          data-callback='sendform'
          data-size='invisible'
        />
        {isOTPSent ? (
          <OTPForm handleClose={handleClose} />
        ) : (
          <PhoneForm handleClose={handleClose} />
        )}
      </div>
    </main>
  );
};

export default LoginPage;
