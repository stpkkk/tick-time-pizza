import React from 'react';
import { pizzerias } from '@/constants';

const SelectPickupPoint: React.FC = () => {
  const handleClick = () => {};

  return (
    <section>
      <h3 className='h3 mb-4'>Где вам удобно получить заказ?</h3>
      <dl className='grid grid-flow-row lgMin:grid-cols-3 smMin:grid-cols-1 mdMin:grid-cols-2 gap-[30px]'>
        {pizzerias.map((pizzeria) => (
          <button
            className='btn_grayLight sm:max-w-full !items-start flex-col p-5 px-[30px] sm:p-4'
            key={pizzeria.id}
          >
            <dt className='text-sm mb-3 sm:mb-1.5'>{pizzeria.address}</dt>
            <dd className='text-xs leading-[15px] font-normal'>
              {pizzeria.openingHours.at(0)}
            </dd>
          </button>
        ))}
      </dl>
    </section>
  );
};

export default SelectPickupPoint;
