import React from 'react';
import Link from 'next/link';

const EmptyCart: React.FC = () => {
  return (
    <div className='gap-30px flex flex-col rounded-2xl bg-white px-[60px] py-[50px] drop-shadow-custom sm:px-4 sm:py-8'>
      <div>
        <p className='text-base font-semibold leading-5 sm:text-xs sm:leading-[15px]'>
          Корзина пока пуста.
        </p>
        <p className='mt-3.5 text-sm leading-[17px] sm:text-xs sm:leading-[15px]'>
          Чтобы оформить заказ, добавьте в корзину несколько товаров из{' '}
          <Link className='underline' href='/'>
            каталога
          </Link>{' '}
          или раздела{' '}
          <Link className='underline' href='/promo'>
            акции
          </Link>
          .
        </p>
        <Link className='btn_red mt-[30px] max-w-[236px]' href='/'>
          выбрать пиццу
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
