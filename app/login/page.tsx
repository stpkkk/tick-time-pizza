'use client';

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ReactInputMask from 'react-input-mask';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GoogleButton } from '@/components';
import { generateUUID } from '@/utils';

type User = {
  uId: string;
  phone: string;
};

const Login: React.FC = () => {
  const [phone, setPhone] = React.useState('');
  const [isPhoneValid, setPhoneValid] = React.useState(false);
  const session = useSession();
  const router = useRouter();
  const handleClickToMainPage = () => {
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneValid(e.target.value.replaceAll(/[-+()_]/g, '').length === 11);
  };

  const getUser = (user: User) => {
    console.log(user);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/account');
    } else {
      console.log(res);
    }

    if (isPhoneValid) {
      getUser({
        uId: generateUUID(),
        phone: phone.slice(3).replaceAll(/[)-]/g, ''),
      });
    }
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
            <ReactInputMask
              className={`${
                isPhoneValid ? '' : 'focus:outline-yellow'
              } w-full px-3 py-4 border text-primary focus:outline-black text-center`}
              mask='+7(999)99-999-99'
              placeholder='+7 (___) ___-__-__'
              value={phone}
              onChange={handleChange}
            />
            <input
              className='w-full px-3 py-4 border text-primary focus:outline-black text-center'
              type='email'
              name='email'
              required
            />
            <input
              className='w-full px-3 py-4 border text-primary focus:outline-black text-center'
              type='password'
              name='password'
              required
            />
            <p className='block text-center'>
              При входе или регистрации вы принимаете условия{' '}
              <Link href='/privacy-policy' className='underline'>
                пользовательского соглашения
              </Link>
            </p>
            <div className='flex flex-col gap-2 w-full'>
              <button
                className='btn_red btn_disabled focus:outline-secondaryLight'
                type='submit'
                disabled={!isPhoneValid}
              >
                Продолжить
              </button>
              <GoogleButton />
            </div>
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
