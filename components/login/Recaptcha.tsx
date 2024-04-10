import React, { FC } from 'react';
import { RecaptchaVerifier, getAuth } from 'firebase/auth';
import { app_firebase } from '@/firebase';
import { ExtendedWindow } from '@/types';

interface RecaptchaProps {
  children: React.ReactNode;
}

const Recaptcha: FC<RecaptchaProps> = ({ children }) => {
  const auth = getAuth(app_firebase);

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

  return (
    <div className='flex_center sm:items-stretch sm:p-0 sm:text-center fixed inset-0 min-h-full p-4 overflow-y-auto'>
      <div className='overlay' />
      <div
        id='recaptcha-container'
        data-sitekey='6lcsaxsdaaaaaebn0spdcencnu9564misyrudzd_'
        data-callback='sendform'
        data-size='invisible'
      />
      {children}
    </div>
  );
};

export default Recaptcha;
