import React, { FC } from 'react';
import Link from 'next/link';

const DescriptionForOrderingPizza: FC = () => {
  return (
    <>
      <p className='sm:text-sm text-base sm:mb-[30px] mb-[50px]'>
        <Link className='underline' href='/'>
          Заказ пиццы
        </Link>{' '}
        можно совершить прямиком с этого сайта или позвонив на наш телефон. Если
        у вас возникнут трудности при совершении заказа пиццы, то на страницах
        нашего сайта вы сможете найти информацию о способах оформления заказа и
        условия доставки.
      </p>
      <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold sm:mb-[30px] mb-[50px]'>
        Заказы на доставку принимаем 24/7.
      </p>
    </>
  );
};

export default DescriptionForOrderingPizza;
