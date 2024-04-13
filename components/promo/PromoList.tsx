import React, { FC } from 'react';
import PromoCard from './PromoCard';
import { promos } from '@/constants';

const PromoList: FC = () => {
  return (
    <div className='wrapper grid lgMin:grid-cols-3 smMin:grid-cols-1 mdMin:grid-cols-2 justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-4 md:mx-auto px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none sm:bg-none md:max-w-[420px]'>
      {promos.map((promo) => (
        <PromoCard promo={promo} key={promo.id} />
      ))}
    </div>
  );
};

export default PromoList;
