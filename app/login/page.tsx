'use client';

import React from 'react';
import { RecaptchaVerifier, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { OTPForm, PhoneForm } from '@/components';
import { app } from '@/firebase/config';
import { useAppSelector } from '@/redux/hooks';
import { ExtendedWindow } from '@/types';

const Login: React.FC = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const { isOTPSent } = useAppSelector((state) => state.loginReducer);

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

  const handleClickToMainPage = () => {
    router.push('/');
  };

  return (
    <div className='content_container relative z-10 min-h-[calc(100vh-268px)] pt-[90px] sm:px-4'>
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
        <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
        <div
          className='fixed left-1/2 -translate-x-1/2 top-0 z-50'
          id={!isOTPSent ? 'recaptcha-container' : ''}
        ></div>
        {isOTPSent ? (
          <OTPForm handleClickToMainPage={handleClickToMainPage} />
        ) : (
          <PhoneForm handleClickToMainPage={handleClickToMainPage} />
        )}
      </div>
    </div>
  );
};

export default Login;
