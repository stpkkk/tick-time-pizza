'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { toggleTooltip } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ImageNotice: React.FC = () => {
  const dispatch = useAppDispatch();
  const isTooltipOpen = useAppSelector(
    (state) => state.menuReducer.isTooltipOpen,
  );
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickExclamation = () => {
    dispatch(toggleTooltip());
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(toggleTooltip());
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

  const TooltipContent = (
    <>
      <div
        className='absolute left-0 top-0 z-20 cursor-pointer text-grayDark hover:text-primary'
        onClick={handleClickExclamation}
      >
        <AiOutlineExclamationCircle size={18} />
      </div>
      <div className='absolute -left-2 -top-2 z-10 max-w-[296px] rounded-2xl bg-white px-9 py-6 drop-shadow-custom'>
        <div
          className='absolute right-0 top-0 cursor-pointer p-2 text-grayDark hover:text-primary'
          onClick={handleClickExclamation}
        >
          <RiCloseFill size={24} />
        </div>
        <p className='text-[12px] leading-[15px]'>
          Изображение в рекламе и внешний вид продукта могут отличаться
        </p>
      </div>
    </>
  );

  return isTooltipOpen ? (
    <div ref={modalRef} className='absolute left-0 top-0 w-full'>
      {TooltipContent}
    </div>
  ) : (
    <div
      className='absolute left-0 top-0 z-20 cursor-pointer text-grayDark hover:text-primary'
      onClick={handleClickExclamation}
    >
      <AiOutlineExclamationCircle size={18} />
    </div>
  );
};

export default ImageNotice;
