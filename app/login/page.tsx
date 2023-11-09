'use client';

import React, { useState } from 'react';
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { OTPForm, PhoneForm } from '@/components';
import { app } from '@/firebase/config';

const Login: React.FC = () => {
  const [isOTPForm, setOTPForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const router = useRouter();
  const auth = getAuth(app);

  React.useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'normal',
        callback: (res: any) => {},
        'expired-callback': () => {},
      },
    );
  }, [auth]);

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+${phone.replace(/\D/g, '')}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier,
      );
      console.log(confirmation);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhone('');
      alert('OTP has been sent!');
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickToMainPage = () => {
    router.push('/');
  };

  return (
    <div className='content_container relative z-10 min-h-[calc(100vh-268px)] pt-[90px] sm:px-4'>
      <div
        className='fixed inset-0 bg-black bg-opacity-25 opacity-100'
        id={!otpSent ? 'recaptcha-container' : ''}
      />
      <div
        className='fixed inset-0 overflow-y-auto flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'
        id='recaptcha-container'
      >
        {isOTPForm ? (
          <OTPForm
            handleClickToMainPage={handleClickToMainPage}
            phone={phone}
            confirmationResult={confirmationResult}
            setOTPForm={setOTPForm}
          />
        ) : (
          <PhoneForm
            handleClickToMainPage={handleClickToMainPage}
            setPhone={setPhone}
            phone={phone}
            handleSendOtp={handleSendOtp}
            setOTPForm={setOTPForm}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
