import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import pizza from '../../public/assets/icons/pizza.svg';
import { ModalWrapper } from '../common';
import {
  resetPromoProductsList,
  setIsPromoModalOpen,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Promos } from '@/types';
import { getPizzaOfTheDay } from '@/utils';

const ModalPromo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPromo } = useAppSelector((state) => state.menuReducer);
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isPizzaOfTheDay = selectedPromo!.title === Promos.PIZZA_OF_THE_DAY;

  const closeModal = () => {
    dispatch(setIsPromoModalOpen(false));
    dispatch(resetPromoProductsList());
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div
        className='modal_inner items-center max-w-[500px] sm:p-8 sm:gap-[30px] sm:text-left sm:overflow-y-auto h-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 rounded-full bg-white p-1 sm:p-0 sm:bg-transparent sm:top-2 sm:right-2'>
          <button
            className=' text-grayDark hover:text-primary sm:right-0 sm:top-0'
            type='button'
            onClick={closeModal}
            tabIndex={0}
          >
            <RiCloseFill size={28} />
          </button>
        </div>
        <h3 className='title hidden sm:block'>
          {isPizzaOfTheDay
            ? selectedPromo!.title + ' ' + currentDay
            : selectedPromo!.title}
        </h3>
        <div className='relative w-full max-w-[500px] aspect-video cursor-pointer rounded-2xl self-center'>
          <Image
            src={selectedPromo!.image}
            alt={selectedPromo!.title}
            placeholder='blur'
            blurDataURL={pizza.src}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-full sm:rounded-2xl'
          />
        </div>
        <div className='px-[60px] py-[50px] sm:p-0'>
          <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] mb-[30px]'>
            {selectedPromo?.description}
          </p>
          {selectedPromo?.isRedirect && (
            <Link
              onClick={closeModal}
              className='btn_yellow max-w-[100px] sm:max-h-[35px]'
              href={`/promo/${selectedPromo.id}`}
            >
              Выбрать
            </Link>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalPromo;
