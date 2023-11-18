'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
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

  return isModalEditProfileOpen ? (
    <div className='relative z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
          <div className='relative w-full max-w-[730px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all sm:rounded-none px-[30px] py-[50px] md:px-4 md:py-[30px]'>
            <button
              className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
              type='button'
              onClick={handleClickClose}
            >
              <RiCloseFill size={36} className='md:w-7' />
            </button>
            <h3 className='h1 mb-[50px]'>Редактирование профиля</h3>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalEditProfile;
