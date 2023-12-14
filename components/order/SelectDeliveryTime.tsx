import React from 'react';
import { RadioButton } from '../common';
import { setDeliveryTime } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { DeliveryTime } from '@/types';

const SelectDeliveryTime: React.FC = () => {
  const dispatch = useAppDispatch();
  const { deliveryTime } = useAppSelector((state) => state.profileReducer);
  const DeliveryTimeArray: string[] = Object.values(DeliveryTime);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeliveryTime(e.target.value));
  };

  const isChecked = (value: string) => deliveryTime === value;

  return (
    <section>
      <h3 className='h3 mb-4'>Когда привезти заказ:</h3>
      <ul className='flex sm:flex-col gap-[30px]'>
        {DeliveryTimeArray.map((change) => (
          <li key={change}>
            <RadioButton
              id={change}
              onChange={handleChange}
              checked={isChecked(change)}
              value={change}
              name={change}
              className='px-[30px] min-h-[60px] sm:max-w-full flex_center sm:px-4 sm:min-h-[50px]'
              innerHTML={
                <span className='text-sm font-bold sm:text-[12px]'>{change}</span>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectDeliveryTime;
