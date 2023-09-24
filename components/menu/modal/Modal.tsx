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
          <div className='flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
            <div
              ref={modalRef}
              className='relative w-full max-w-[950px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all sm:rounded-none'
            >
              <button
                className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
                type='button'
                onClick={handleClick}
              >
                <RiCloseFill size={36} className='md:w-7' />
              </button>
              <div className='modal_form'>
                <ModalLeftContent setModalHeight={setModalHeight} />
                <ModalRightContent modalHeight={modalHeight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 z-10 hidden w-full rounded-2xl bg-white p-4 pb-[30px] drop-shadow-custom sm:block'>
        <ModalTotal />
      </div>
    </>
  );
};

export default Modal;
