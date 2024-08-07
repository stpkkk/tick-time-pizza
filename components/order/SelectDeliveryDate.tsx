import React from 'react';
import OptionToSelect from './OptionToSelect';
import { useAppDispatch, useAppSelector, setOrderFormData } from '@/redux';
import { DeliveryDate } from '@/types';
import { getFormattedDateTime } from '@/utils';

const SelectDeliveryDate: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orderFormData } = useAppSelector((state) => state.profileReducer);
  const { day, month } = getFormattedDateTime();
  const soonDelivery = Object.values(DeliveryDate);

  const dateDelivery = Array.from({ length: 6 }, (_, index) => {
    const nextDay = +day + index + 2;
    const adjustedDay = nextDay <= 31 ? nextDay : nextDay - 31;
    const formattedDay = adjustedDay.toString().padStart(2, '0');
    return `${formattedDay}.${month}`;
  });

  const deliveryDates = [...soonDelivery, ...dateDelivery];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setOrderFormData({ ...orderFormData, deliveryDate: e.target.value }),
    );
  };

  const isChecked = (value: string) => orderFormData.deliveryDate === value;

  return (
    <section>
      <h3 className='h3 mb-4'>Когда привезти заказ:</h3>
      <ul className='scroll pb-4 flex gap-[30px] sm:gap-4 overflow-x-auto scroll-smooth mdMin:thin_scroll'>
        {deliveryDates.map((date) => (
          <li key={date}>
            <OptionToSelect
              id={date}
              onChange={handleChange}
              checked={isChecked(date)}
              value={date}
              name={date}
              className='px-[30px] min-h-[60px] sm:max-w-full flex_center sm:px-4 sm:min-h-[50px]'
              innerHTML={
                <span className='text-sm font-bold sm:text-[12px]'>{date}</span>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectDeliveryDate;
