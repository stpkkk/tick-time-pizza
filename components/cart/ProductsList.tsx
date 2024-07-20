import React from 'react';
import { Loader } from '../common';
import EmptyCart from './EmptyCart';
import Product from './Product';
import { useCart } from '@/hooks';

const ProductsList: React.FC = () => {
  const { cartProducts, isLoading } = useCart();

  if (isLoading)
    return (
      <div className='grid place-items-center w-full h-[300px]'>
        <Loader />
      </div>
    );

  return (
    <div className='flex w-full flex-row gap-[30px] sm:flex-col'>
      <div className='md:max-w-full w-full'>
        {cartProducts.length > 0 ? (
          <ul className='wrapper flex flex-col gap-[30px] px-[60px] py-[50px] sm:px-4 sm:py-8'>
            {cartProducts.map((product) => (
              <Product key={product.uuid} product={product} />
            ))}
          </ul>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default ProductsList;
