'use client';

import React from 'react';
import { ModalPromo, PromoCard } from '@/components';
import { promos } from '@/constants';
import { useAppSelector } from '@/redux/hooks';

const PromoList: React.FC = () => {
  const { isPromoModalOpen } = useAppSelector((state) => state.menuReducer);

  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      <h1 className='title sm:my-4 my-[30px] ml-[60px] sm:ml-4'>Акции</h1>
      <div className='container grid gap-x-[30px] gap-y-[50px] sm:gap-y-4 md:mx-auto px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 sm:bg-none justify-items-center md:max-w-[420px]'>
        {promos.map((promo) => (
          <PromoCard promo={promo} key={promo.id} />
        ))}
      </div>
      {isPromoModalOpen && <ModalPromo />}
    </main>
  );
};

export default PromoList;
