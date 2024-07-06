import React from 'react';
import { Loader } from '../common';
import { MenuItem } from '../common/menu';
import { useProducts, usePromoProducts } from '@/hooks';
import { Promo } from '@/types';

type PromoProductsListProps = {
  promo?: Promo;
};

const PromoProductsList: React.FC<PromoProductsListProps> = ({ promo }) => {
  const { products, isLoading } = useProducts();
  const promoTitle = promo?.title ?? '';
  const promoProducts = usePromoProducts(promoTitle, products);

  if (isLoading)
    return (
      <div className='grid place-items-center min-h-[400px] w-[800px]'>
        <Loader />
      </div>
    );

  return (
    <div className='wrapper flex flex-col sm:gap-[30px] px-[60px] py-[50px] w-full md:px-4 sm:drop-shadow-none sm:mx-auto'>
      <ul className='grid justify-items-center smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4'>
        {promoProducts.map((product) => (
          <MenuItem
            key={product.id}
            product={product}
            promo={promo}
            products={promoProducts}
          />
        ))}
      </ul>
    </div>
  );
};

export default PromoProductsList;
