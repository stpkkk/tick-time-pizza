'use client';

import React from 'react';
import { ModalPromo, PromoCard } from '@/components';
import { promos } from '@/constants';
import { useAppSelector } from '@/redux/hooks';

const PromoList: React.FC = () => {
  const { isModalOpen } = useAppSelector((state) => state.menuReducer);

  return (
    <div className='content_container min-h-[calc(100vh-268px)] mt-[90px] sm:mt-[70px]'>
      <div className='h1 my-10 sm:my-4 ml-[60px] sm:ml-4'>Акции</div>
      <div className='grid gap-x-[30px] gap-y-[50px] sm:gap-y-4 w-full px-[60px] py-[50px] sm:p-0 drop-shadow-custom sm:drop-shadow-none bg-white rounded-2xl smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 sm:bg-none justify-items-center'>
        {promos.map((promo) => (
          <PromoCard promo={promo} key={promo.id} />
        ))}
      </div>
      {isModalOpen && <ModalPromo />}
    </div>
  );
};

export default PromoList;
