import React from 'react';
import { MenuItem } from '../common/menu';
import { useAppSelector } from '@/redux';
import { IProduct } from '@/types';

type PromoProductsListProps = {
  promoProducts: IProduct[];
};

const PromoProductsList: React.FC<PromoProductsListProps> = ({
  promoProducts,
}) => {
  return (
    <div className='wrapper flex flex-col sm:gap-[30px] px-[60px] py-[50px] w-full md:px-4 sm:drop-shadow-none sm:mx-auto'>
      <ul className='grid justify-items-center smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4'>
        {promoProducts.map((product) => (
          <MenuItem
            key={product.id}
            product={product}
            products={promoProducts}
          />
        ))}
      </ul>
    </div>
  );
};

export default PromoProductsList;
