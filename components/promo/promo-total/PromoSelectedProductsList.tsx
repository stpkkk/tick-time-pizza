import React from 'react';
import PromoTotalItem from './PromoTotalItem';
import { useAppSelector } from '@/redux';
import { generateUUID } from '@/utils';

const PromoSelectedProductsList: React.FC = () => {
  const { totalPromoProducts, promoProductsList } = useAppSelector(
    (state) => state.menuReducer,
  );

  return (
    <ul className='flex flex-col gap-[30px]'>
      {promoProductsList.map((product) => (
        <li className='flex flex-col gap-2.5' key={generateUUID()}>
          <PromoTotalItem
            product={product}
            totalPromoProducts={totalPromoProducts}
          />
        </li>
      ))}
    </ul>
  );
};

export default PromoSelectedProductsList;
