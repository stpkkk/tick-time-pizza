'use client';

import React from 'react';
import { useFormik } from 'formik';
import { ButtonsSaveCancel, Input, ModalWrapper } from '../common';
import {
  setCurrentUser,
  setModalEditProfile,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { profileSchema } from '@/schemas';
import { ExtendedUser } from '@/types';

const ModalEditProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);

  const closeModal = () => {
    dispatch(setModalEditProfile(false));
    resetForm();
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

  const isFormNotValid =
    (!values.name.trim() && !values.birthday.trim() && !values.email.trim()) ||
    !!errors.email;

  return (
    <ModalWrapper closeModal={closeModal} width={730}>
      <form
        className='px-16 py-[50px] sm:p-4'
        onSubmit={handleSubmit}
      >
        <h3 className='h1 flex_center mb-[50px]'>Редактирование профиля</h3>
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
        <ButtonsSaveCancel disabled={isFormNotValid} clickCancel={closeModal} />
      </form>
    </ModalWrapper>
  );
};

export default ModalEditProfile;
