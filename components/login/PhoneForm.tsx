'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ReactInputMask from 'react-input-mask';
import Link from 'next/link';
import { generateUUID } from '@/utils';

type PhoneFormProps = {
  handleClickToMainPage: () => void;
  setOTPForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
};

// type User = {
//   uId: string;
//   phone: string;
// };

const PhoneForm: React.FC<PhoneFormProps> = ({
  handleClickToMainPage,
  setOTPForm,
  setPhone,
  phone,
}) => {
  const [isPhoneValid, setPhoneValid] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneValid(e.target.value.replaceAll(/[-+()_]/g, '').length === 11);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPhoneValid) {
      // getUser({
      //   uId: generateUUID(),
      //   phone: phone.slice(3).replaceAll(/[)-]/g, ''),
      // });
      setOTPForm(true);
    }
  };

  return (
    <form className='login_form' onSubmit={handlePhoneSubmit}>
      <p className='block uppercase text-2xl'>Укажите телефон</p>
      <p className='block text-center'>
        Введите номер телефона, чтобы войти или зарегистрироваться
      </p>
      <ReactInputMask
        className={`${isPhoneValid && 'focus:outline-yellow'} login_input`}
        mask='+7(999)99-999-99'
        placeholder='+7 (___) ___-__-__'
        value={phone}
        onChange={handleChange}
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
        onClick={handleClickToMainPage}
        type='button'
      >
        <AiOutlineCloseCircle size={35} />
      </button>
    </form>
  );
};

export default PhoneForm;
