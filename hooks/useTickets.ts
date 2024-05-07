import { ChangeEvent } from 'react';
import { APP_CONFIG } from '@/config';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const useTickets = () => {
  const dispatch = useAppDispatch();
  const { orderFormData, user, orderPrice } = useAppSelector(
    (state) => state.profileReducer,
  );
  const userTickets = user?.tickets || 0;

  const calculateAvailableTickets = () => {
    const remainingTickets = Math.min(
      orderPrice - APP_CONFIG.TICKETS_AND_DELIVERY_MIN_PRICE,
      userTickets,
    );
    return Math.max(remainingTickets, 0);
  };

  const availableTickets = calculateAvailableTickets();

  const handleTicketsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const minValue = 0;
    const maxValue = userTickets;

    let inputValue = e.target.value.replace(/\D/g, '');

    if (inputValue === '0' || inputValue === '' || orderPrice < 0) {
      inputValue = '';
    }

    if (+inputValue > availableTickets) {
      inputValue = availableTickets.toString();
    }

    const ticketsToUse = Math.max(minValue, Math.min(maxValue, +inputValue));

    const updatedOrder = { ...orderFormData, ticketsToUse };
    dispatch(setOrderFormData(updatedOrder));
  };

  return {
    ticketsInputValue:
      orderFormData.ticketsToUse === 0
        ? ''
        : orderFormData.ticketsToUse?.toString(),
    availableTickets,
    handleTicketsChange,
    userTickets,
  };
};
