import React from 'react';
import Image from 'next/image';
import { cards, content } from '@/constants';

const SberbankPage: React.FC = () => {
  return (
    <main className='mt-[90px] px-[60px] sm:px-4'>
      <h1 className='h1 sm:my-4 my-10'>Оплата по карте через Сбербанк</h1>
      <p className='sm:text-sm sm:mb-30px mb-50px text-base'>
        Оплата происходит через авторизационный сервер Процессингового центра
        Банка с использованием Банковских кредитных карт следующих платежных
        систем:
      </p>
      <ul className='flex flex-row sm:gap-2.5 gap-[30px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar my-[60px] sm:my-6 w-full'>
        {cards.map((card) => (
          <li key={card.id} className='sm:px-4 flex items-center gap-2 px-10'>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold sm:px-4'>
              {card.name}
            </p>
            <div className='flex_center h-[60px] w-[100px]'>
              <Image
                src={card.image}
                alt={card.name}
                width={100}
                height={60}
                loading='eager'
              />
            </div>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col gap-[30px]'>
        {content.map((c) => (
          <li className='flex flex-col gap-[20px] sm:gap-4' key={c.id}>
            <h3 className='h3'>{c.title}</h3>
            <p className='sm:text-sm text-base'>{c.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SberbankPage;
