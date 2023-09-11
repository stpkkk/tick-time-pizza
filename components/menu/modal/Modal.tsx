'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  initializeDefaultValues,
  toggleModal,
} from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';
import { RiCloseFill } from 'react-icons/ri';

import ModalLeftContent from './ModalLeftContent';
import ModalRightContent from './ModalRightContent';
import ModalTotal from './ModalTotal';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();

  const modalRef = useRef<HTMLDivElement>(null);

  const [modalHeight, setModalHeight] = useState<number>(0);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        modalRef.current.clientWidth > 768
      ) {
        dispatch(toggleModal(false));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleClickOutside]);

  useEffect(() => {
    dispatch(initializeDefaultValues());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(toggleModal(false));
  };

  return (
    <>
      <div className='relative z-10'>
        <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex_center min-h-full sm:text-center sm:items-stretch p-4 sm:p-0'>
            <div
              ref={modalRef}
              className='relative max-w-[950px] w-full overflow-hidden bg-white align-middle drop-shadow-custom transition-all rounded-2xl opacity-100 scale-100 sm:rounded-none'
            >
              <button
                className='absolute flex items-center z-10 gap-3 text-grayDark hover:text-primary sm:top-0 sm:right-0 sm:p-1 top-[18px] right-[18px]'
                type='button'
                onClick={handleClick}
              >
                <RiCloseFill size={36} className='md:w-7' />
              </button>
              <form className='modal_form'>
                <ModalLeftContent setModalHeight={setModalHeight} />
                <ModalRightContent modalHeight={modalHeight} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed hidden w-full sm:block bg-white z-10 left-0 bottom-0 p-4 pb-[30px] drop-shadow-custom rounded-2xl'>
        <ModalTotal />
      </div>
    </>
  );
};

export default Modal;
