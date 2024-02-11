import React from 'react';
import { APP_CONFIG } from '@/config';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type TicketsProps = {
  orderTotalPrice: number;
};

const Tickets: React.FC<TicketsProps> = ({ orderTotalPrice }) => {
  const dispatch = useAppDispatch();
  const { orderFormData, user } = useAppSelector(
    (state) => state.profileReducer,
  );
  const ticketsInputValue =
    orderFormData.ticketsToUse === 0 ? '' : orderFormData.ticketsToUse;
  const availableTickets = Math.abs(
    APP_CONFIG.TICKETS_MIN_PRICE - orderTotalPrice <= 0
      ? APP_CONFIG.TICKETS_MIN_PRICE - orderTotalPrice
      : 0,
  );

  const handleTicketsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = 0;
    const maxValue = user?.tickets || 0;

    let inputValue = e.target.value;

    // Заменяем все символы, не являющиеся цифрами, на пустую строку
    inputValue = inputValue.replace(/\D/g, '');

    // Если введено значение 0, пустая строка, значение меньше допустимого или цена меньше 0, то сделать инпут пустым
    if (
      inputValue === '0' ||
      inputValue === '' ||
      +inputValue > availableTickets ||
      orderTotalPrice < 0
    ) {
      inputValue = '';
    }

    const ticketsToUse = Math.max(minValue, Math.min(maxValue, +inputValue));

    const updatedOrder = {
      ...orderFormData,
      ticketsToUse,
    };
    dispatch(setOrderFormData(updatedOrder));
  };

  return (
    <div>
      <h3 className='h3 mb-4'>Использовать тикеты</h3>
      <input
        className='block px-6 sm:py-4 py-[21px] w-full sm:text-xs text-sm md:leading-4 font-semibold bg-transparent rounded-2xl border border-primary border-solid appearance-none focus:outline-none focus:ring-0 focus:border-yellow disabled:border-gray peer mb-4'
        type='text'
        onChange={handleTicketsChange}
        value={ticketsInputValue}
      />
      <p className='sm:text-xs text-sm italic'>
        Доступно: {availableTickets} из {user?.tickets || 0}
      </p>
    </div>
  );
};

export default Tickets;
