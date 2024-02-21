import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { promos } from '@/constants';
import {
  resetPromoProductsList,
  setIsPromoModalOpen,
  setSelectedPromo,
} from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Promo, Promos } from '@/types';
import { getPizzaOfTheDay } from '@/utils';

type PromoCardProps = {
  promo: Promo;
};

const PromoCard: React.FC<PromoCardProps> = ({ promo }) => {
  const dispatch = useAppDispatch();
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isPizzaOfTheDay = promo.title === Promos.PIZZA_OF_THE_DAY;

  const handlePromoClick = (clickedPromo: Promo, openModal: boolean) => {
    const selectedPromo = promos.find((p) => p.id === clickedPromo.id);
    dispatch(setSelectedPromo(selectedPromo || null));
    dispatch(setIsPromoModalOpen(openModal));
    dispatch(resetPromoProductsList());
  };

  return (
    <article className='flex_start md:flex_center flex-col w-full h-full bg-white max-w-[420px] sm:drop-shadow-custom sm:rounded-2xl sm:p-4 '>
      <div className='relative w-full max-w-[350px] aspect-video cursor-pointer rounded-2xl mb-4 md:self-center'>
        <Image
          src={promo.image}
          alt={promo.title}
          placeholder='blur'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          priority
          onClick={() => handlePromoClick(promo, true)}
          className='rounded-2xl'
        />
      </div>
      <span className='block mb-4 font-semibold leading-5'>
        {isPizzaOfTheDay ? promo.title + ' ' + currentDay : promo.title}
      </span>
      <footer className='gap-7 flex items-center justify-start flex-1'>
        {promo.isRedirect && (
          <Link
            href={`/promo/${promo.id}`}
            onClick={() => handlePromoClick(promo, false)}
            className='btn_yellow h-[45px] px-4 sm:h-[35px] uppercase'
          >
            Выбрать
          </Link>
        )}
        <button
          type='button'
          onClick={() => handlePromoClick(promo, true)}
          className='flex-nowrap text-grayDark hover:text-primary animate-fade-in flex flex-row items-center justify-between gap-3 text-sm font-semibold'
        >
          <BsPlusSquare size={24} className='sm:w-[20px] sm:h-[20px]' />
          <span className='sm:text-xs sm:leading-[15px]'>Подробнее</span>
        </button>
      </footer>
    </article>
  );
};

export default PromoCard;
