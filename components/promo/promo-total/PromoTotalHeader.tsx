import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Promo } from '@/types';

type PromoTotalQuantityProps = {
  promo?: Promo;
};

const PromoTotalHeader: React.FC<PromoTotalQuantityProps> = ({ promo }) => {
  const { totalPromoProductsQuantity } = useAppSelector(
    (state) => state.menuReducer,
  );
  return (
    <>
      <span className='text-lg font-semibold leading-5 uppercase font-zheldor'>
        Пицца
      </span>
      <p className='text-xs font-semibold text-right'>
        Выбрано:{' '}
        <span className='whitespace-nowrap'>
          {totalPromoProductsQuantity} из {promo?.maxValue}
        </span>
      </p>
    </>
  );
};

export default PromoTotalHeader;
