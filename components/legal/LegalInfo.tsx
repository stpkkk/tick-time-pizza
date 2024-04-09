import React, { FC } from 'react';
import { legals } from '@/constants';
import { generateUUID } from '@/utils';

const LegalInfo: FC = () => {
  return (
    <div className='px-[30px] sm:px-4'>
      <p className='md:text-sm text-base mb-[30px]'>
        В зависимости от указанного адреса, будет выбрано предприятие -
        приготовления Вашего заказа. Чтобы узнать более точную информацию по -
        сделанному заказу, Вы можете позвонить по телефону{' '}
        <a className='underline' href='tel:330204'>
          33-02-04{' '}
        </a>
        . Информацию об изготовителе Вы можете увидеть ниже. Также подробную -
        информацию Вы найдёте на чеке и этикетке.
      </p>
      {legals.map(({ title, info }) => (
        <>
          <h2 className='mb-2 text-lg font-bold leading-6 uppercase'>
            {title}
          </h2>
          <ul className='mb-2'>
            {info.map((text) => (
              <li key={generateUUID()}>{text}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default LegalInfo;
