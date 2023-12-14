import React from 'react';
import { RadioButton } from '../common';
import { pizzerias } from '@/constants';
import { setPickPoint } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Pizzeria } from '@/types';

const SelectPickupPoint: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pickPoint } = useAppSelector((state) => state.profileReducer);

  const handleChange = (selectedPizzeria: Pizzeria) => {
    dispatch(setPickPoint(selectedPizzeria.address));
  };

  const isChecked = (value: string) => pickPoint === value;

  const renderPizzeriaDetails = (pizzeria: Pizzeria) => (
    <dl>
      <dt className='text-sm mb-3 sm:mb-1.5 font-bold'>{pizzeria.address}</dt>
      <dd className='text-xs leading-[15px] font-normal'>
        {pizzeria.openingHours.at(0)}
      </dd>
    </dl>
  );

  return (
    <section className='flex flex-col gap-4'>
      <h3 className='h3'>Где вам удобно получить заказ?</h3>
      <div className='min-h-[300px]' />
      <div className='grid grid-flow-row lgMin:grid-cols-3 smMin:grid-cols-1 mdMin:grid-cols-2 gap-[30px]'>
        {pizzerias.map((pizzeria) => (
          <RadioButton
            key={pizzeria.id}
            id={pizzeria.address}
            onChange={() => handleChange(pizzeria)}
            checked={isChecked(pizzeria.address)}
            value={pizzeria.address}
            name={pizzeria.address}
            className='sm:max-w-full !items-start flex-col p-5 px-[30px] sm:p-4'
            innerHTML={renderPizzeriaDetails(pizzeria)}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectPickupPoint;
