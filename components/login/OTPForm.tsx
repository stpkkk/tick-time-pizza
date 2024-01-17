'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgSpinner } from 'react-icons/cg';
import { IoMdArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { ConfirmationResult } from 'firebase/auth';
import { useRouter } from 'next/navigation';
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
  handleClose: () => void;
};

const OTPForm: React.FC<OTPFormProps> = ({ handleClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { phone, otp, confirmationResult, loading, isOtpValid } =
    useAppSelector((state) => state.profileReducer);

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOtp(e.target.value));
    dispatch(setOtpValid(true));
  };

  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

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
        <CgSpinner
          size={70}
          className='text-yellow absolute flex_center animate-spin sm:max-w-[40px] sm:h-[40px]'
        />
      ) : (
        <>
          <p className='uppercase text-2xl'>Введите код</p>
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
            className='btn_red btn_disabled focus:outline-secondaryLight'
            type='submit'
          >
            Подтвердить код
          </button>
          <button
            className='absolute top-5 right-5 flex items-center text-grayDark hover:text-primary'
            onClick={handleClose}
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
