'use client';

import React from 'react';
import { ModalPromo, PromoCard } from '@/components';
import { promos } from '@/constants';
import { useAppSelector } from '@/redux/hooks';

const PromoList: React.FC = () => {
  const { isPromoModalOpen } = useAppSelector((state) => state.menuReducer);

  return (
    <div className='content_container min-h-[calc(100vh-268px)] pt-[90px] sm:pt-[70px]'>
      <h1 className='h1 sm:my-4 my-[30px] ml-[60px] sm:ml-4'>Акции</h1>
      <div className='grid gap-x-[30px] gap-y-[50px] sm:gap-y-4 md:mx-auto px-[60px] py-[50px] sm:p-0 drop-shadow-custom sm:drop-shadow-none bg-white rounded-2xl smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 sm:bg-none justify-items-center md:max-w-[420px]'>
        {promos.map((promo) => (
          <PromoCard promo={promo} key={promo.id} />
        ))}
      </div>
      {isPromoModalOpen && <ModalPromo />}
    </div>
  );
};

export default PromoList;
