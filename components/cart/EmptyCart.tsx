import React from 'react';
import Link from 'next/link';

const EmptyCart: React.FC = () => {
  return (
    <div className='flex flex-col gap-30px sm:py-8 sm:px-4 py-[50px] px-[60px] rounded-2xl drop-shadow-custom bg-white'>
      <div>
        <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold'>
          Корзина пока пуста.
        </p>
        <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] mt-3.5'>
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
        <Link className='btn_red max-w-[236px] mt-[30px]' href='/'>
          выбрать пиццу
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
