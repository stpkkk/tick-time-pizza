'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [phone, setPhone] = React.useState('');
  const router = useRouter();
  const handleClickToMainPage = () => {
    router.push('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <form
      className='content_container relative z-10 min-h-[calc(100vh-268px)] pt-[90px] sm:px-4'
      onSubmit={handleSubmit}
    >
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
        <div className='relative w-full max-w-[600px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all px-[112px] py-[85px] sm:rounded-none sm:p-8 sm:flex sm:flex-col sm:gap-[30px] sm:text-left'>
          <div className='flex items-center flex-col gap-8 sm:justify-center sm:h-full'>
            <p className='block uppercase text-2xl'>Укажите телефон</p>
            <p className='block text-center'>
              Введите номер телефона, чтобы войти или зарегистрироваться
            </p>
            <input
              type='text'
              defaultValue='+7 (___) ___-__-__'
              autoFocus
              onChange={handleChangePhone}
              inputMode='numeric'
              className='relative w-full px-3 py-4 border text-primary focus:outline-black text-center'
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
            >
              Продолжить
            </button>
          </div>
          <button
            className='absolute top-5 right-5 flex items-center text-grayDark hover:text-primary'
            onClick={handleClickToMainPage}
            type='button'
          >
            <AiOutlineCloseCircle size={35} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
