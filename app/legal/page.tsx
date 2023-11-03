import React from 'react';
import { legals } from '@/constants';
import { generateUUID } from '@/utils';

const Legal: React.FC = () => {
  return (
    <div className='content_container min-h-[calc(100vh-268px)] pt-[90px] sm:px-4 !px-[60px]'>
      <h1 className='h1 my-[30px] sm:my-4'>Правовая информация</h1>
      <p className='md:text-sm text-base mb-[30px]'>
        В зависимости от указанного адреса, будет выбрано предприятие
        приготовления Вашего заказа. Чтобы узнать более точную информацию по
        сделанному заказу, Вы можете позвонить по телефону{' '}
        <a className='underline' href='tel:330204'>
          33-02-04
        </a>
        . Информацию об изготовителе Вы можете увидеть ниже. Также подробную
        информацию Вы найдёте на чеке и этикетке.
      </p>
      {legals.map((item) => (
        <>
          <h2 className='text-[1.5rem] leading-[2rem] sm:mb-4 mb-[20px] font-zheldor uppercase font-bold'>
            {item.title}
          </h2>
          <ul className='mb-[20px] sm:mb-4'>
            {item.info.map((inf) => (
              <li key={generateUUID()}>{inf}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Legal;
