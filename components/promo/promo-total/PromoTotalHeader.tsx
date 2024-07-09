import React from 'react';
import { useAppSelector } from '@/redux';
import { Promo } from '@/types';

type PromoTotalQuantityProps = {
  promo?: Promo;
};

const PromoTotalHeader: React.FC<PromoTotalQuantityProps> = ({ promo }) => {
  const { totalPromoProducts } = useAppSelector((state) => state.menuReducer);

  return (
    <>
      <span className='font-zheldor text-lg font-semibold leading-5 uppercase'>
        Пицца
      </span>
      <p className='text-xs font-semibold text-right'>
        Выбрано:{' '}
        <span className='whitespace-nowrap'>
          {totalPromoProducts} из {promo?.maxValue}
        </span>
      </p>
    </>
  );
};

export default PromoTotalHeader;
