'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ModalWrapper } from '../common';
import ModalLeftContent from './ModalLeftContent';
import ModalRightContent from './ModalRightContent';
import ModalTotal from './ModalTotal';
import {
  initializeDefaultValues,
  setModalProductOpen,
} from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';

const ModalProduct: React.FC = () => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setModalProductOpen(false));
  };

  React.useEffect(() => {
    dispatch(initializeDefaultValues());
  }, [dispatch]);

  return (
    <>
      <ModalWrapper closeModal={closeModal}>
        <div
          className='modal_inner max-w-[950px]'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
            type='button'
            onClick={closeModal}
          >
            <RiCloseFill size={36} className='md:w-7' />
          </button>
          <div className='grid grid-cols-2 gap-[60px] w-full h-full overflow-auto overflow-x-hidden py-[60px] pl-[60px] sm:block sm:px-8 sm:pb-44 sm:pt-8'>
            <ModalLeftContent />
            <ModalRightContent />
          </div>
        </div>
      </ModalWrapper>
      <div className='container fixed bottom-0 left-0 z-10 hidden w-full p-4 pb-[30px] sm:block'>
        <ModalTotal />
      </div>
    </>
  );
};

export default ModalProduct;
