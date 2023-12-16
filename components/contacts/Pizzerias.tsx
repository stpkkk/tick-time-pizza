import React from 'react';
import { Pizzeria } from '@/types';
import { generateUUID } from '@/utils';

type PizzeriasProps = {
  pizzeria: Pizzeria;
};

const Pizzerias: React.FC<PizzeriasProps> = ({ pizzeria }) => {
  return (
    <div className='sm:mb-[30px] mb-[50px]'>
      <span className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold block mb-2'>
        {pizzeria.address}
      </span>
      <ul>
        {pizzeria.openingHours.map((openingHour) => (
          <li key={generateUUID()}>{openingHour}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzerias;
