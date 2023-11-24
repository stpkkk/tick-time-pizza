'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import ModalLeftContent from './ModalLeftContent';
import ModalRightContent from './ModalRightContent';
import ModalTotal from './ModalTotal';
import {
  initializeDefaultValues,
  toggleModal,
} from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();

  const modalRef = React.useRef<HTMLDivElement>(null);
  const [modalHeight, setModalHeight] = React.useState<number>(0);

  const handleClickOutside = React.useCallback(
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

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleClickOutside]);

  React.useEffect(() => {
    dispatch(initializeDefaultValues());
  }, [dispatch]);

  const handleClickClose = () => {
    dispatch(toggleModal(false));
  };

  return (
    <>
      <div className='relative z-10'>
        <div className='overlay' />
          <div className='fixed inset-0 overflow-y-auto flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
            <div
              className='modal_inner max-w-[950px] sm:rounded-none'
              ref={modalRef}
            >
              <button
                className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
                type='button'
                onClick={handleClickClose}
              >
                <RiCloseFill size={36} className='md:w-7' />
              </button>
              <div className='modal'>
                <ModalLeftContent setModalHeight={setModalHeight} />
                <ModalRightContent modalHeight={modalHeight} />
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
