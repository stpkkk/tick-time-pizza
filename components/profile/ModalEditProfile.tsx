'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Input } from '../common';
import {
  setCurrentUser,
  setModalEditProfile,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExtendedUser } from '@/types';

const ModalEditProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalEditProfileOpen, user } = useAppSelector(
    (state) => state.profileReducer,
  );

  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [birthdayValid, setBirthdayValid] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    birthday: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setNameValid(!!value.trim());
    }

    if (name === 'email') {
      setEmailValid(/\S+@\S+\.\S+/.test(value));
    }

    if (name === 'birthday') {
      setBirthdayValid(!!value.trim());
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nameValid && emailValid && birthdayValid) {
      dispatch(
        setCurrentUser({
          ...user,
          ...formData,
        } as ExtendedUser),
      );

      dispatch(setModalEditProfile(false));

      // Reset validation states
      setNameValid(true);
      setEmailValid(true);
      setBirthdayValid(true);
    }
  };

  const closeModal = () => {
    dispatch(setModalEditProfile(false));
  };

  return isModalEditProfileOpen ? (
    <div className='relative z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
          <form
            className='relative w-full max-w-[730px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all sm:rounded-none px-16 py-[50px] sm:flex sm:flex-col sm:justify-center'
            onSubmit={handleSubmit}
          >
            <button
              className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
              type='button'
              onClick={closeModal}
            >
              <RiCloseFill size={36} className='md:w-7' />
            </button>
            <h3 className='h1 flex_center mb-[50px]'>Редактирование профиля</h3>
            <div className='flex flex-col gap-[30px] sm:gap-[18px] mb-[50px] sm:mb-[30px]'>
              <Input
                id='name'
                type='text'
                label='Ваше имя'
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                id='email'
                type='text'
                label='Ваш e-mail'
                value={formData.email}
                onChange={handleChange}
                isValid={emailValid}
              />
              <Input
                id='birthday'
                type='date'
                label='Ваш день рождения'
                value={formData.birthday}
                onChange={handleChange}
              />
            </div>
            <div className='flex_center gap-[30px] sm:gap-2.5'>
              <button
                className='btn_gray max-w-[236px]'
                onClick={closeModal}
                type='button'
              >
                Отменить
              </button>
              <button
                className='btn_red btn_disabled max-w-[236px]'
                type='submit'
                disabled={!nameValid || !birthdayValid || !emailValid}
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalEditProfile;
