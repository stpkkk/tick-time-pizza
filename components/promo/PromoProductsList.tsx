import React from 'react';
import { ProductItem } from '../menu';
import { Promo } from '@/types';
import { getPromoProducts } from '@/utils';

type PromoProductsListProps = {
  promo?: Promo;
};

const PromoProductsList: React.FC<PromoProductsListProps> = ({ promo }) => {
  const promoTitle = promo?.title ?? '';
  const promoProducts = getPromoProducts(promoTitle);

  return (
    <div className='flex flex-col sm:gap-[30px] rounded-2xl bg-white px-[60px] py-[50px] w-full drop-shadow-custom md:px-4 sm:drop-shadow-none sm:mx-auto'>
      <div className='grid justify-items-center smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4'>
        {promoProducts.map((product) => (
          <ProductItem key={product.id} product={product} promo={promo} />
        ))}
      </div>
    </div>
  );
};

export default PromoProductsList;
