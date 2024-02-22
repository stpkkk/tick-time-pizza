import React from 'react';
import Link from 'next/link';

const NoOrders: React.FC = () => {
  return (
    <div className='wrapper sm:py-8 sm:px-4 py-[50px] px-[60px]'>
      <p className='mb-4 text-base font-semibold leading-5 sm:text-[12px] sm:leading-[15px]'>
        У вас пока нет активных или завершённых заказов.
      </p>
      <p className='text-sm leading-[17px] sm:text-[12px] sm:leading-[15px]'>
        Перейдите в каталог, чтобы сделать ваш первый заказ.
      </p>
      <Link
        href='/'
        className='btn_red min-h-[60px] sm:min-h-[50px] mt-[30px] max-w-[276px] uppercase'
        type='button'
      >
        Выбрать пиццу
      </Link>
    </div>
  );
};

export default NoOrders;
