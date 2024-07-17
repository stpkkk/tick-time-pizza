import React from 'react';
import Product from './Product';
import { useCart } from '@/hooks';

const ProductsList: React.FC = () => {
  const { cartProducts } = useCart();

  return (
    <ul className='wrapper flex flex-col gap-[30px] px-[60px] py-[50px] sm:px-4 sm:py-8'>
      {cartProducts.map((product) => (
        <Product key={product.uuid} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
