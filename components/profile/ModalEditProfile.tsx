'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useFormik } from 'formik';
import { Input } from '../common';
import {
  setCurrentUser,
  setModalEditProfile,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { profileSchema } from '@/schemas';
import { ExtendedUser } from '@/types';

const ModalEditProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalRef = React.useRef<HTMLFormElement>(null);
  const { user } = useAppSelector((state) => state.profileReducer);

  const closeModal = () => {
    dispatch(setModalEditProfile(false));
  };

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
    handleBlur,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      birthday: '',
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(
        setCurrentUser({
          ...user,
          ...values,
        } as ExtendedUser),
      );
      closeModal();
    },
  });

  const clickCancel = () => {
    dispatch(setModalEditProfile(false));
    resetForm();
  };

  const isFormNotValid =
    (!values.name.trim() && !values.birthday.trim() && !values.email.trim()) ||
    !!errors.email;

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(setModalEditProfile(false));
      }
    },
    [dispatch],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleClickOutside]);

  return (
    <div className='relative z-10'>
      <div className='overlay' />
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full sm:items-stretch sm:p-0 sm:text-center'>
        <form
          className='modal_inner max-w-[730px] sm:rounded-none px-16 py-[50px] sm:flex sm:flex-col sm:justify-center'
          ref={modalRef}
          onSubmit={handleSubmit}
        >
          <button
            className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
            type='button'
            onClick={closeModal}
          >
            <RiCloseFill size={36} className='md:w-7' />
          </button>
          <h3 className='title flex_center mb-[50px]'>
            Редактирование профиля
          </h3>
          <div className='flex flex-col gap-[30px] sm:gap-[18px] mb-[50px] sm:mb-[30px]'>
            <Input
              id='name'
              type='text'
              label='Ваше имя'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              id='email'
              type='email'
              label='Ваш e-mail'
              value={values.email}
              onChange={handleChange}
              isValid={!!touched.email && !!errors.email}
              onBlur={handleBlur}
            />
            <Input
              id='birthday'
              type='date'
              label='Ваш день рождения'
              value={values.birthday}
              onChange={handleChange}
              isValid={!!touched.birthday && !!errors.birthday}
              onBlur={handleBlur}
            />
          </div>
          <div className='flex_center gap-[30px] sm:gap-2.5'>
            <button
              className='btn_gray max-w-[236px]'
              onClick={clickCancel}
              type='button'
            >
              Отменить
            </button>
            <button
              className='btn_red btn_disabled max-w-[236px]'
              type='submit'
              disabled={isFormNotValid}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProfile;
