import React from 'react';
import { MenuItem } from '../menu';
import { usePromoProducts } from '@/hooks';
import { Promo } from '@/types';

type PromoProductsListProps = {
  promo?: Promo;
};

const PromoProductsList: React.FC<PromoProductsListProps> = ({ promo }) => {
  const promoTitle = promo?.title ?? '';
  const promoProducts = usePromoProducts(promoTitle);

  return (
    <div className='wrapper flex flex-col sm:gap-[30px] px-[60px] py-[50px] w-full md:px-4 sm:drop-shadow-none sm:mx-auto'>
      <div className='grid justify-items-center smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4'>
        {promoProducts.map((product) => (
          <MenuItem key={product.id} product={product} promo={promo} />
        ))}
      </div>
    </div>
  );
};

export default PromoProductsList;
