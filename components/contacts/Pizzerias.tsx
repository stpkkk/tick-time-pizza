import React from 'react';
import { pizzerias } from '@/constants';
import { generateUUID } from '@/utils';

const Pizzerias: React.FC = () => {
  return (
    <>
      {pizzerias.map((pizzeria) => (
        <div className='sm:mb-[30px] mb-[50px]' key={pizzeria.id}>
          <span className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold block mb-2'>
            {pizzeria.address}
          </span>
          <ul>
            {pizzeria.openingHours.map((openingHour) => (
              <li key={generateUUID()}>{openingHour}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Pizzerias;
