'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Input } from '../common';
import { setModalEditProfile } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalEditProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalEditProfileOpen } = useAppSelector(
    (state) => state.profileReducer,
  );
  const handleClickClose = () => {
    dispatch(setModalEditProfile(false));
  };

  const onNameChange = () => {};
  const onEmailChange = () => {};
  const onBirthdayChange = () => {};
  const onClickCancel = () => {
    dispatch(setModalEditProfile(false));
  };
  const onClickSave = () => {};

  return isModalEditProfileOpen ? (
    <div className='relative z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
          <div className='relative w-full max-w-[730px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all sm:rounded-none px-16 py-[50px] sm:flex sm:flex-col sm:justify-center'>
            <button
              className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
              type='button'
              onClick={handleClickClose}
            >
              <RiCloseFill size={36} className='md:w-7' />
            </button>
            <h3 className='h1 flex_center mb-[50px]'>Редактирование профиля</h3>
            <div className='flex flex-col gap-[30px] sm:gap-[18px] mb-[50px] sm:mb-[30px]'>
              <Input
                id='name'
                type='text'
                label='Ваше имя'
                onChange={onNameChange}
              />
              <Input
                id='e-mail'
                type='text'
                label='Ваш e-mail'
                onChange={onEmailChange}
              />
              <Input
                id='birthday'
                type='text'
                label='Ваш день рождения'
                onChange={onBirthdayChange}
              />
            </div>
            <div className='flex_center gap-[30px] sm:gap-2.5'>
              <button
                className='btn_gray max-w-[236px]'
                onClick={onClickCancel}
              >
                Отменить
              </button>
              <button
                className='btn_red btn_disabled max-w-[236px]'
                onClick={onClickSave}
                disabled
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalEditProfile;
