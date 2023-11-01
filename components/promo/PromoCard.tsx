import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import pattern from '../../public/assets/icons/pattern-pizza-boxes.svg';
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
      <Image
        src={promo.image}
        alt={promo.title}
        placeholder='blur'
        blurDataURL={pattern.src}
        onClick={() => handlePromoClick(promo, true)}
        className='w-full h-auto max-w-[350px] cursor-pointer rounded-2xl mb-4 md:self-center'
      />
      <span className='block font-semibold leading-5 mb-4'>
        {isPizzaOfTheDay ? promo.title + ' ' + currentDay : promo.title}
      </span>
      <footer className='flex-1 flex justify-start items-center gap-7'>
        {promo.isRedirect && (
          <Link
            href={`/promo/${promo.id}`}
            onClick={() => handlePromoClick(promo, false)}
            className='btn_yellow max-w-[100px] sm:max-h-[35px]'
          >
            Выбрать
          </Link>
        )}
        <button
          type='button'
          onClick={() => handlePromoClick(promo, true)}
          className='flex justify-between items-center flex-nowrap flex-row gap-3 text-sm font-semibold text-grayDark hover:text-primary'
        >
          <BsPlusSquare size={24} className='sm:w-[20px] sm:h-[20px]' />
          <span className='sm:text-xs sm:leading-[15px]'>Подробнее</span>
        </button>
      </footer>
    </article>
  );
};

export default PromoCard;
