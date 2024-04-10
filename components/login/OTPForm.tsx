'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { ConfirmationResult } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Loader } from '../common';
import { useLocalStorage } from '@/hooks';
import {
  setCurrentUser,
  setLoading,
  setOtp,
  setOtpSent,
  setOtpValid,
  setPhoneValid,
} from '@/redux/features/profileSlice';
import { useAppSelector } from '@/redux/hooks';

type OTPFormProps = {
  onClose: () => void;
};

const OTPForm: React.FC<OTPFormProps> = ({ onClose }) => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useDispatch();
  const { phone, otp, confirmationResult, loading, isOtpValid } =
    useAppSelector((state) => state.profileReducer);
  const router = useRouter();

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOtp(e.target.value));
    dispatch(setOtpValid(true));
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setOtp(''));
    try {
      dispatch(setLoading(true));
      if (confirmationResult && otp.trim() !== '') {
        // Confirm the OTP code
        const credential = await (
          confirmationResult as ConfirmationResult
        ).confirm(otp);

        // User is signed in
        const user = credential.user;
        console.log('Successfully confirmed OTP. User:', user);

        dispatch(setCurrentUser(user));
        await setUserInLS(user);
        dispatch(setOtpSent(false));
        router.push('/profile');
      } else {
        console.error('confirmationResult is null');
        dispatch(setOtpValid(false));
      }
    } catch (error) {
      console.error('Error confirming OTP:', error);
      dispatch(setOtpValid(false));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleClickBack = () => {
    dispatch(setOtpSent(false));
    dispatch(setOtp(''));
    dispatch(setOtpValid(true));
    dispatch(setPhoneValid(false));
  };

  return (
    <form className='login_form' onSubmit={handleOtpSubmit}>
      {loading ? (
        <div className='absolute'>
          <Loader />
        </div>
      ) : (
        <>
          <p className='text-2xl uppercase'>Введите код</p>
          <p className='text-center'>
            На номер {phone} отправлено СМС-сообщение с кодом
          </p>
          <input
            className='login_input'
            placeholder='СМС-код'
            value={otp}
            onChange={handleOTPChange}
            maxLength={6}
            autoFocus
            type='text'
          />
          <p className='text-secondaryLight'>
            {!isOtpValid ? 'Пароль неверный' : ''}
          </p>
          <button
            className='btn_red min-h-[60px] sm:min-h-[50px] btn_disabled focus:outline-secondaryLight uppercase'
            type='submit'
          >
            Подтвердить код
          </button>
          <button
            className='top-5 right-5 text-grayDark hover:text-primary animate-fade-in absolute flex items-center'
            onClick={onClose}
            type='button'
          >
            <AiOutlineCloseCircle size={35} />
          </button>
          <button
            className='top-5 left-5 text-grayDark hover:text-primary animate-fade-in absolute flex items-center'
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
