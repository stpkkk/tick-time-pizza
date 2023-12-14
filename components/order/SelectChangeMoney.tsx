import React from 'react';
import { RadioButton } from '../common';
import { setCashChange } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ChangeMoneyFrom, PaymentMethods } from '@/types';

const SelectChangeMoney: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cashChange, paymentMethod } = useAppSelector(
    (state) => state.profileReducer,
  );
  const ChangeMoneyFromArray: string[] = Object.values(ChangeMoneyFrom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCashChange(e.target.value));
  };

  const isChecked = (value: string) => cashChange === value;

  if (paymentMethod !== PaymentMethods.CASH) return null;

  return (
    <section>
      <h3 className='h3 mb-4'>Сдача С:</h3>
      <ul className='flex sm:flex-col gap-[30px]'>
        {ChangeMoneyFromArray.map((change) => (
          <li key={change}>
            <RadioButton
              id={change}
              onChange={handleChange}
              checked={isChecked(change)}
              value={change}
              name={change}
              className='px-[30px] min-h-[60px] sm:max-w-full flex_center sm:px-4 sm:min-h-[50px]'
              innerHTML={
                <span className='text-sm font-bold sm:text-[12px]'>
                  {change}
                </span>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectChangeMoney;
