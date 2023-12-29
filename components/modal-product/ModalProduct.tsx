'use client';

import React from 'react';
import { ModalWrapper } from '../common';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import ModalTotal from './ModalTotal';
import {
  initializeDefaultValues,
  setModalProductOpen,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalProductOpen } = useAppSelector((state) => state.menuReducer);

  const closeModal = () => {
    dispatch(setModalProductOpen(false));
  };

  React.useEffect(() => {
    dispatch(initializeDefaultValues());
  }, [dispatch, isModalProductOpen]);

  if (!isModalProductOpen) return;

  return (
    <>
      <ModalWrapper closeModal={closeModal} width={950}>
        <div className='grid grid-cols-2 gap-[60px] w-full h-full overflow-auto overflow-x-hidden py-[60px] pl-[60px] sm:block sm:px-8 sm:pb-44 sm:pt-8'>
          <ContentLeft />
          <ContentRight />
        </div>
      </ModalWrapper>
      <div className='container fixed bottom-0 left-0 z-10 hidden w-full p-4 pb-[30px] sm:block'>
        <ModalTotal />
      </div>
    </>
  );
};

export default ModalProduct;
