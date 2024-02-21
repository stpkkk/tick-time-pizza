import React from 'react';
import { categories } from '@/constants';
import { setSelectedCategory } from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';

const NoBookmarks: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='container px-[60px] py-[50px] sm:p-4'>
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
        className='btn_red min-h-[60px] sm:min-h-[50px] mt-[30px] max-w-[276px] uppercase'
        type='button'
        onClick={() => dispatch(setSelectedCategory(categories[0]))}
      >
        Показать все продукты
      </button>
    </div>
  );
};

export default NoBookmarks;
