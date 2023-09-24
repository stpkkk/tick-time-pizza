import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setSelectedCategory } from '@/redux/features/menuSlice';

import { categories } from '@/constants';

const NoBookmarks: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='rounded-2xl sm:bg-white sm:p-4 sm:drop-shadow-custom'>
      <p className='mb-4 text-base font-semibold leading-5 sm:text-[12px] sm:leading-[15px]'>
        Вы ещё не добавили свои любимые товары в «Избранное»
      </p>
      <p className='text-sm leading-[17px] sm:text-[12px] sm:leading-[15px]'>
        Нажмите кнопку ниже, чтобы посмотреть полный список товаров.
        <br />
        Там же вы сможете отметить любимые товары, нажав на иконку в форме
        сердечка на карточке продукта.
      </p>
      <button
        className='btn_red mt-[30px] max-w-[276px]'
        type='button'
        onClick={() => dispatch(setSelectedCategory(categories[0]))}
      >
        Показать все продукты
      </button>
    </div>
  );
};

export default NoBookmarks;
