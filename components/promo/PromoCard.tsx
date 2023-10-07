import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import Image from 'next/image';
import pizza from '../../public/assets/icons/pizza.svg';
import { Promos } from '@/types';

type PromoCardProps = {
  promo: Promos;
};

const PromoCard: React.FC<PromoCardProps> = ({ promo }) => {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const d = new Date();
  const n = d.getDay();

  const isPizzaOfTheDay = promo.title === 'Пицца дня.';

  return (
    <article className='flex flex-col w-full h-full bg-white sm:max-w-[420px] max-w-[350px] md:max-w-[350px] sm:drop-shadow-custom sm:rounded-2xl sm:p-4'>
      <Image
        src={promo.image}
        alt={promo.title}
        placeholder='blur'
        blurDataURL={pizza.src}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        width={350}
        height={197}
        className='aspect-square h-full max-h-[197px] w-full max-w-[350px] sm:max-h-[144px] cursor-pointer rounded-2xl mb-4 sm:self-center'
      />
      <span className='block font-semibold leading-5 mb-4'>
        {isPizzaOfTheDay ? promo.title + ' ' + days[n] : promo.title}
      </span>
      <footer className='flex-1 flex justify-start items-center gap-7'>
        <button className='btn_yellow max-w-[100px] sm:max-h-[35px]'>
          Выбрать
        </button>
        <button
          type='button'
          // onClick={() => ''}
          className='flex justify-between items-center flex-nowrap flex-row gap-3 text-sm font-semibold text-grayDark hover:text-primary'
        >
          <BsPlusSquare size={24} className='sm:w-[21px] sm:h-[21px]' />
          <span className='sm:text-xs sm:leading-[15px]'>Подробнее</span>
        </button>
      </footer>
    </article>
  );
};

export default PromoCard;
