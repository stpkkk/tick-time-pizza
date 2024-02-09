'use client';

import React from 'react';
import { ModalPromo, PromoCard } from '@/components';
import { promos } from '@/constants';

const PromoPage: React.FC = () => {
  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      <h1 className='h1 sm:my-4 my-[30px] ml-[60px] sm:ml-4'>Акции</h1>
      <div className='container grid lgMin:grid-cols-3 smMin:grid-cols-1 mdMin:grid-cols-2 justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-4 md:mx-auto px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none sm:bg-none md:max-w-[420px]'>
        {promos.map((promo) => (
          <PromoCard promo={promo} key={promo.id} />
        ))}
      </div>
      <ModalPromo />
    </main>
  );
};

export default PromoPage;
