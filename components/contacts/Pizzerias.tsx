import React from 'react';
import { Pizzerias } from '@/types'

type PizzeriasProps ={
	pizzeria: Pizzerias
}

const Pizzerias: React.FC<PizzeriasProps> = ({pizzeria}) => {
  return (
		 <div className='sm:mb-[30px] mb-[50px]'>
		  <span className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold block mb-2'>
			  {pizzeria.adress}
		  </span>
		  <ul>
				 {pizzeria.openingHours.map((openingHour) => (
					 <li key={crypto.randomUUID()}>{openingHour}</li>
				))}
		 </ul> 
	 </div>
  );
};

export default Pizzerias;
