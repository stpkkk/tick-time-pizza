'use client';

import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgSpinner } from 'react-icons/cg';
import { IoMdArrowBack } from 'react-icons/io';
import ReactInputMask from 'react-input-mask';
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { generateUUID } from '@/utils';

// Import your Firebase configuration here

type OTPFormProps = {
  handleClickToMainPage: () => void;
  phone: string;
  setOTPForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const OTPForm: React.FC<OTPFormProps> = ({
  handleClickToMainPage,
  phone,
  setOTPForm,
}) => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'sign-in-button',
    {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      },
    },
  );
  const [otp, setOtp] = React.useState('');

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<{ uId: string; phone: string }>({
    uId: '',
    phone: '',
  });

  let appVerifier: RecaptchaVerifier | null = null;

  function onCaptchaVerify() {
    if (!appVerifier) {
      appVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          onSignup();
        },
        'expired-callback': () => {},
      });
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchaVerify();

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    if (window.confirmationResult) {
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          console.log(res);
          setUser({
            uId: res.user.uid,
            phone: phone.slice(3).replace(/[)-]/g, ''),
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOTPVerify();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleClickBack = () => {
    setOTPForm(false);
  };

  return (
    <form className='login_form' onSubmit={handleOTPSubmit}>
      {loading ? (
        <CgSpinner
          size={70}
          className='text-yellow absolute flex_center animate-spin'
        />
      ) : (
        <>
          <div id='recaptcha-container'></div>
          <p className='block uppercase text-2xl'>Enter the code</p>
          <p className='block text-center'>
            A SMS message with a code has been sent to the number {phone}
          </p>
          <ReactInputMask
            className='login_input'
            mask=''
            placeholder='SMS code'
            value={otp}
            onChange={handleChange}
            maxLength={6}
            autoFocus
          />
          <button
            className='btn_red btn_disabled focus:outline-secondaryLight'
            type='submit'
            disabled={!otp}
          >
            Verify Code
          </button>
          <button
            className='absolute top-5 right-5 flex items-center text-grayDark hover:text-primary'
            onClick={handleClickToMainPage}
            type='button'
          >
            <AiOutlineCloseCircle size={35} />
          </button>
          <button
            className='absolute top-5 left-5 flex items-center text-grayDark hover:text-primary'
            onClick={handleClickBack}
            type='button'
          >
            <IoMdArrowBack size={35} />
          </button>
        </>
      )}
    </form>
  );
};

export default OTPForm;
