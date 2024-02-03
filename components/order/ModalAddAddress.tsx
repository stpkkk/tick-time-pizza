'use client';

import React from 'react';
import { useFormik } from 'formik';
import { ButtonsSaveCancel, Input, ModalWrapper } from '../common';
import { useLocalStorage } from '@/hooks';
import {
  setCurrentUser,
  setModalAddAddress,
  setOrderFormData,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { generateUUID } from '@/utils';

const ModalAddAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  const { isModalAddAddressOpen, user, orderFormData } = useAppSelector(
    (state) => state.profileReducer,
  );

  const closeModal = () => {
    dispatch(setModalAddAddress(false));
    resetForm();
  };

  const { handleChange, values, handleSubmit, resetForm } = useFormik({
    initialValues: {
      street: '',
      house: '',
      birthday: '',
      apartments: '',
      doorCode: '',
      floor: '',
      entrance: '',
      comment: '',
    },
    onSubmit: async (values) => {
      const updatedAddresses = [
        ...(user?.addresses || []),
        { ...values, uuid: generateUUID() },
      ];

      dispatch(
        setOrderFormData({
          ...orderFormData,
          deliveryAddress: updatedAddresses.at(-1),
        }),
      );

      const updatedUser = {
        ...userInLS,
        addresses: updatedAddresses,
      };

      dispatch(setCurrentUser(updatedUser));
      await setUserInLS(updatedUser);

      closeModal();
    },
  });

  const isFormNotValid = !values.street.trim() || !values.house.trim();

  return isModalAddAddressOpen ? (
    <ModalWrapper closeModal={closeModal} width={990}>
      <form
        className='py-[50px] px-[60px] sm:p-4 max-w-[990px]'
        onSubmit={handleSubmit}
      >
        <h2 className='h1 text-center mb-[30px]'>Добавить новый адрес</h2>
        <div className='flex flex-col sm:gap-[18px] gap-[30px]'>
          <div className='flex justify-between gap-[30px] sm:gap-2.5'>
            <Input
              id='street'
              type='text'
              label='Улица'
              onChange={handleChange}
              className='max-w-[645px]'
              required
              value={values.street}
            />
            <Input
              id='house'
              type='text'
              label='Дом'
              onChange={handleChange}
              className='max-w-[195px] sm:max-w-[100px]'
              required
              value={values.house}
            />
          </div>
          <div className='flex gap-[30px] sm:gap-2.5'>
            <div className='flex sm:basis-1/2 sm:flex-col gap-[30px] sm:gap-2.5'>
              <Input
                id='apartments'
                type='text'
                label='Квартира\Офис'
                onChange={handleChange}
                value={values.apartments}
              />
              <Input
                id='doorCode'
                type='text'
                label='Код двери'
                onChange={handleChange}
                value={values.doorCode}
              />
            </div>
            <div className='flex sm:basis-1/2 sm:flex-col gap-[30px] sm:gap-2.5'>
              <Input
                id='floor'
                type='text'
                label='Этаж'
                onChange={handleChange}
                value={values.floor}
              />
              <Input
                id='entrance'
                label='Подъезд'
                onChange={handleChange}
                value={values.entrance}
                type='text'
              />
            </div>
          </div>
          <Input
            id='comment'
            label='Комментарий к адресу'
            onChange={handleChange}
            type='text'
          />
        </div>
        <div className='min-h-[430px]' />
        <div className='absolute bottom-[50px] z-10 left-1/2 -translate-x-2/4 flex sm:gap-2.5 gap-30px w-full sm:px-4'>
          <ButtonsSaveCancel
            disabled={isFormNotValid}
            clickCancel={closeModal}
          />
        </div>
      </form>
    </ModalWrapper>
  ) : null;
};

export default ModalAddAddress;
