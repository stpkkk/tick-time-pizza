'use client';

import React from 'react';
import {
  ApplicationVerifier,
  ConfirmationResult,
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { OTPForm, PhoneForm } from '@/components';
import { app } from '@/firebase/config';

interface ExtendedWindow extends Window {
  recaptchaVerifier?: RecaptchaVerifier;
}

const Login: React.FC = () => {
  const [isOTPForm, setOTPForm] = React.useState(false);
  const [phone, setPhone] = React.useState('');
  const [confirmationResult, setConfirmationResult] =
    React.useState<ConfirmationResult | null>(
      null as unknown as ConfirmationResult,
    );

  const [otpSent, setOtpSent] = React.useState(false);

  const router = useRouter();
  const auth = getAuth(app);

  React.useEffect(() => {
    (window as ExtendedWindow).recaptchaVerifier = new RecaptchaVerifier(
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
      const recaptchaVerifier = (window as ExtendedWindow).recaptchaVerifier;

      if (recaptchaVerifier) {
        const confirmation: ConfirmationResult = await signInWithPhoneNumber(
          auth,
          formattedPhoneNumber,
          recaptchaVerifier as ApplicationVerifier,
        );

        console.log(confirmation);
        setConfirmationResult(confirmation);
        setOtpSent(true);
        setPhone('');
        alert('OTP has been sent!');
      } else {
        console.error('RecaptchaVerifier is not defined');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickToMainPage = () => {
    router.push('/');
  };

  return (
    <div className='content_container relative z-10 min-h-[calc(100vh-268px)] pt-[90px] sm:px-4'>
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
        <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
        <div
          className='fixed left-1/2 -translate-x-1/2 top-0 z-50'
          id={!otpSent ? 'recaptcha-container' : ''}
        ></div>
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
