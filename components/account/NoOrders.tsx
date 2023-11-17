import React from 'react';

const NoOrders: React.FC = () => {
  return (
    <div className='rounded-2xl bg-white sm:p-4 drop-shadow-custom sm:py-8 sm:px-4 py-[50px] px-[60px]'>
      <p className='mb-4 text-base font-semibold leading-5 sm:text-[12px] sm:leading-[15px]'>
        У вас пока нет активных или завершённых заказов.
      </p>
      <p className='text-sm leading-[17px] sm:text-[12px] sm:leading-[15px]'>
        Перейдите в каталог, чтобы сделать ваш первый заказ.
      </p>
      <button className='btn_red mt-[30px] max-w-[276px]' type='button'>
        Выбрать пиццу
      </button>
    </div>
  );
};

export default NoOrders;
