import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setSelectedCategory } from '@/redux/features/menuSlice';

import { categories } from '@/constants';

const NoBookmarks: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='sm:bg-white sm:drop-shadow-custom sm:p-4 rounded-2xl'>
      <p className='sm:text-[12px] sm:leading-[15px] text-base leading-5 mb-4 font-semibold'>
        Вы ещё не добавили свои любимые товары в «Избранное»
      </p>
      <p className='sm:text-[12px] sm:leading-[15px] text-sm leading-[17px]'>
        Нажмите кнопку ниже, чтобы посмотреть полный список товаров.
        <br />
        Там же вы сможете отметить любимые товары, нажав на иконку в форме
        сердечка на карточке продукта.
      </p>
      <button
        className='btn_red max-w-[276px] mt-[30px]'
        type='button'
        onClick={() => dispatch(setSelectedCategory(categories[0]))}
      >
        Показать все продукты
      </button>
    </div>
  );
};

export default NoBookmarks;
