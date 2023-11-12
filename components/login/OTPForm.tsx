'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgSpinner } from 'react-icons/cg';
import { IoMdArrowBack } from 'react-icons/io';
import ReactInputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { ConfirmationResult } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import {
  setLoading,
  setOtp,
  setOtpSent,
  setUser,
} from '@/redux/features/loginSlice';
import { useAppSelector } from '@/redux/hooks';

type OTPFormProps = {
  handleClickToMainPage: () => void;
};

const OTPForm: React.FC<OTPFormProps> = ({ handleClickToMainPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { phone, otp, confirmationResult, loading } = useAppSelector(
    (state) => state.loginReducer,
  );

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOtp(e.target.value));
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      if (confirmationResult) {
        // Confirm the OTP code
        const credential = await (
          confirmationResult as ConfirmationResult
        ).confirm(otp);
        // User is signed in
        const user = credential.user;
        console.log('Successfully confirmed OTP. User:', user);
        // Handle additional logic after successful OTP confirmation
        dispatch(setUser(user));
        router.push(`/account`);
      } else {
        console.error('confirmationResult is null');
      }
    } catch (error) {
      console.error('Error confirming OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickBack = () => {
    dispatch(setOtpSent(false));
  };

  return (
    <form className='login_form' onSubmit={handleOtpSubmit}>
      {loading ? (
        <CgSpinner
          size={70}
          className='text-yellow absolute flex_center animate-spin'
        />
      ) : (
        <>
          <p className='block uppercase text-2xl'>Введите код</p>
          <p className='block text-center'>
            На номер {phone} отправлено СМС-сообщение с кодом
          </p>
          <ReactInputMask
            className='login_input'
            mask=''
            placeholder='СМС-код'
            value={otp}
            onChange={handleOTPChange}
            maxLength={6}
            autoFocus
            type='text'
          />
          <button
            className='btn_red btn_disabled focus:outline-secondaryLight'
            type='submit'
          >
            Подтвердить код
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
