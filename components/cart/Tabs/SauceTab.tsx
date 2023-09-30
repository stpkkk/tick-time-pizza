import React from 'react';
import Image from 'next/image';
import pizza from '../../../public/assets/icons/pizza.svg';
import { menu } from '@/constants';
import { IProduct } from '@/types';

const SauceTab: React.FC = () => {
  const sauces = menu.filter((product) => product.group === 'sauces');

  return (
    <ul
      className='grid grid-cols-2 gap-7 sm:no-scrollbar sm:scroll sm:flex sm:scroll-px-4 flex-row sm:gap-4 sm:overflow-x-scroll sm:scroll-smooth whitespace-nowrap w-full sm:h-[135px]'
      id='sauces'
    >
      {sauces?.map((sauce: IProduct) => (
        <li className='flex flex-none gap-4 mb-6' key={sauce.id}>
          <Image
            src={sauce.image}
            alt={sauce.title}
            placeholder='blur'
            blurDataURL={pizza.src}
            width={150}
            height={150}
            className='aspect-square h-full max-h-[150px] w-full max-w-[150px] sm:max-h-[102px] sm:max-w-[102px]'
          />
          <div className='flex justify-between flex-col gap-4 font-bold'>
            <span className='block sm:text-xs whitespace-pre-wrap max-w-[150px]'>
              {sauce.title}
            </span>
            <span className='block sm:text-xs'>{sauce.prices[0].price} ₽</span>
            <button
              className='btn_yellow min-w-[150px] sm:max-w-[100px] sm:h-[35px]'
              type='button'
            >
              Добавить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SauceTab;
