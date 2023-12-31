'use client';

import React from 'react';
import { ButtonsSaveCancel, Input, ModalWrapper } from '../common';
import { setModalAddAddress } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalAddAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalAddAddressOpen } = useAppSelector(
    (state) => state.profileReducer,
  );

  const closeModal = () => {
    dispatch(setModalAddAddress(false));
    // resetForm(); //этот метод из Formik
  };

  if (!isModalAddAddressOpen) return;

  return (
    <ModalWrapper closeModal={closeModal} width={990}>
      <form className='py-[50px] px-[60px] sm:p-4 max-w-[990px]'>
        <h2 className='h1 text-center mb-[30px] sm:hidden'>
          Добавить новый адрес
        </h2>
        <div className='flex flex-col sm:gap-[18px] gap-[30px]'>
          <div className='flex justify-between gap-[30px] sm:gap-2.5'>
            <Input
              id='street'
              label='Улица'
              onChange={() => {}}
              type='text'
              className='max-w-[645px]'
              required
            />
            <Input
              id='house'
              label='Дом'
              onChange={() => {}}
              type='text'
              className='max-w-[195px] sm:max-w-[100px]'
              required
            />
          </div>
          <div className='flex gap-[30px] sm:gap-2.5'>
            <div className='flex sm:basis-1/2 sm:flex-col gap-[30px] sm:gap-2.5'>
              <Input
                id='apartment'
                label='Квартира\Офис'
                onChange={() => {}}
                type='text'
              />
              <Input
                id='door-code'
                label='Код двери'
                onChange={() => {}}
                type='text'
              />
            </div>
            <div className='flex sm:basis-1/2 sm:flex-col gap-[30px] sm:gap-2.5'>
              <Input id='floor' label='Этаж' onChange={() => {}} type='text' />
              <Input
                id='entrance'
                label='Подъезд'
                onChange={() => {}}
                type='text'
              />
            </div>
          </div>
          <Input
            id='comment'
            label='Комментарий к адресу'
            onChange={() => {}}
            type='text'
          />
        </div>
        <div className='min-h-[430px]' />
        <div className='absolute bottom-[50px] z-10 left-1/2 -translate-x-2/4 flex sm:gap-2.5 gap-30px w-full'>
          <ButtonsSaveCancel disabled={true} clickCancel={closeModal} />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ModalAddAddress;