import React from 'react';
import { useTickets } from '@/hooks';

const Tickets: React.FC = () => {
  const {
    ticketsInputValue,
    availableTickets,
    handleTicketsChange,
    userTickets,
  } = useTickets();

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
        Доступно: {availableTickets} из {userTickets}
      </p>
    </div>
  );
};

export default Tickets;
