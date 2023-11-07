'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import ReactInputMask from 'react-input-mask';

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
  const handleOTPSubmit = () => {};
  const handleChange = () => {};
  const handleClickBack = () => {
    setOTPForm(false);
  };

  return (
    <form className='login_form' onSubmit={handleOTPSubmit}>
      <p className='block uppercase text-2xl'>Введите код</p>
      <p className='block text-center'>
        На номер {phone}
        <br /> отправлено СМС-сообщение с кодом
      </p>
      <ReactInputMask
        className='login_input'
        mask=''
        placeholder='СМС-код'
        // value={phone}
        onChange={handleChange}
      />
      <button
        className='btn_red btn_disabled focus:outline-secondaryLight'
        type='submit'
        disabled={true}
      >
        Получить новый код
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
    </form>
  );
};

export default OTPForm;
