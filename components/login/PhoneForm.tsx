'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ReactInputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import {
  ApplicationVerifier,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth';
import Link from 'next/link';
import { app } from '@/firebase';
import {
  setConfirmationResult,
  setOtpSent,
  setPhone,
  setPhoneValid,
} from '@/redux/features/profileSlice';
import { useAppSelector } from '@/redux/hooks';
import { ExtendedWindow } from '@/types';

type PhoneFormProps = {
  handleClose: () => void;
};

const PhoneForm: React.FC<PhoneFormProps> = ({ handleClose }) => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const { phone, isPhoneValid } = useAppSelector(
    (state) => state.profileReducer,
  );

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
    dispatch(
      setPhoneValid(e.target.value.replaceAll(/[-+()_]/g, '').length === 13),
    );
  };

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+${phone.replace(/\D/g, '')}`;
      const recaptchaVerifier = (window as ExtendedWindow).recaptchaVerifier;

      if (recaptchaVerifier) {
        const confirmation = await signInWithPhoneNumber(
          auth,
          formattedPhoneNumber,
          recaptchaVerifier as ApplicationVerifier,
        );

        console.log(confirmation);
        dispatch(setConfirmationResult(confirmation));
        dispatch(setOtpSent(true));
        dispatch(setPhone(''));
        console.log('OTP has been sent!');
      } else {
        console.error('RecaptchaVerifier is not defined');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendOtp();
  };

  return (
    <form className='login_form' onSubmit={handlePhoneSubmit}>
      <p className='block uppercase text-2xl'>Укажите телефон</p>
      <p className='block text-center'>
        Введите номер телефона, чтобы войти или зарегистрироваться
      </p>
      <ReactInputMask
        className={`${isPhoneValid && 'focus:outline-yellow'} login_input`}
        mask='+7 (999) 999-99-99'
        placeholder='+7 (___) ___-__-__'
        value={phone}
        onChange={handleChangePhoneNumber}
        type='tel'
      />
      <p className='block text-center'>
        При входе или регистрации вы принимаете условия{' '}
        <Link href='/privacy-policy' className='underline'>
          пользовательского соглашения
        </Link>
      </p>
      <button
        className='btn_red btn_disabled focus:outline-secondaryLight'
        type='submit'
        disabled={!isPhoneValid}
      >
        Продолжить
      </button>
      <button
        className='absolute top-5 right-5 flex items-center text-grayDark hover:text-primary'
        onClick={handleClose}
        type='button'
      >
        <AiOutlineCloseCircle size={35} />
      </button>
    </form>
  );
};

export default PhoneForm;
