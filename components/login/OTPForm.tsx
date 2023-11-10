'use client';

import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgSpinner } from 'react-icons/cg';
import { IoMdArrowBack } from 'react-icons/io';
import ReactInputMask from 'react-input-mask';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '@/firebase';

type OTPFormProps = {
  handleClickToMainPage: () => void;
  phone: string;
  confirmationResult: any;
  setOTPForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const OTPForm: React.FC<OTPFormProps> = ({
  handleClickToMainPage,
  phone,
  confirmationResult,
  setOTPForm,
}) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);
  const router = useRouter();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/account');
      }
    });
  }, [auth, router]);

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = async () => {
    try {
      await confirmationResult.confirm(otp);
      setOtp('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickBack = () => {
    setOTPForm(false);
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
