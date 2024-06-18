import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '../common';
import pizza from '@/public/assets/icons/pizza.svg';
import {
  useAppDispatch,
  useAppSelector,
  setIsPromoModalOpen,
  resetPromoProductsList,
} from '@/redux';
import { Promos } from '@/types';
import { getPizzaOfTheDay } from '@/utils';

const ModalPromo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPromo, isPromoModalOpen } = useAppSelector(
    (state) => state.menuReducer,
  );
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isPizzaOfTheDay = selectedPromo?.title === Promos.PIZZA_OF_THE_DAY;

  const closeModal = () => {
    dispatch(setIsPromoModalOpen(false));
    dispatch(resetPromoProductsList());
  };

  if (!isPromoModalOpen) return;

  return (
    <Modal closeModal={closeModal} width={500}>
      <div className='sm:p-8 sm:flex sm:flex-col sm:gap-[30px] sm:text-left sm:overflow-y-auto h-full self-start'>
        <div className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 rounded-full bg-white p-1 sm:p-0 sm:bg-transparent sm:top-2 sm:right-2'>
          <button
            className='text-grayDark hover:text-primary sm:right-0 sm:top-0 animate-fade-in'
            type='button'
            onClick={closeModal}
            tabIndex={0}
          >
            <RiCloseFill size={28} className='md:w-7' />
          </button>
        </div>
        <h3 className='h1 sm:block hidden'>
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
            className='sm:rounded-2xl w-full'
          />
        </div>
        <div className='px-[60px] py-[50px] sm:p-0'>
          <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] mb-[30px]'>
            {selectedPromo?.description}
          </p>
          {selectedPromo?.isRedirect && (
            <Link
              onClick={closeModal}
              className='btn_yellow h-[45px] max-w-[100px] sm:max-h-[35px]'
              href={`/promo/${selectedPromo.id}`}
            >
              Выбрать
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalPromo;
