import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';
import { Counter, SelectedProductOptions } from '../common';
import { useCart } from '@/hooks';
import { IProduct } from '@/types';
import { calculateProductPrices } from '@/utils';

interface CartProductProps {
  product: IProduct;
}

const Product: React.FC<CartProductProps> = ({ product }) => {
  const { handleIncrement, handleDecrement, handleRemove } = useCart(
    product?.uuid || '',
  );

  const {
    image,
    title,
    selectedSize,
    selectedIngredients,
    productQuantity,
    id,
  } = product;

  const { totalProductPrice } = calculateProductPrices(
    product,
    selectedSize || null,
    selectedIngredients || [],
    productQuantity || 1,
  );

  return (
    <li className='flex_start md:gap-4 flex-none gap-5' key={id}>
      <Image
        src={image}
        alt={title}
        className='aspect-square h-full max-h-[76px] w-full max-w-[76px]'
      />
      <div className='flex w-full min-w-[1px] flex-row gap-4 pt-4 sm:items-start sm:gap-3.5 sm:pt-0 md:flex-col md:flex-wrap'>
        <div className='mr-auto min-w-[1px] max-w-full'>
          <SelectedProductOptions product={product} />
        </div>
        <div className='flex_start sm:flex_center flex-row gap-5 leading-[20px] sm:gap-2'>
          <Counter
            minValue={1}
            value={productQuantity || 1}
            initialValue={productQuantity || 1}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <span className='whitespace-nowrap text-base font-semibold leading-5 sm:text-xs sm:leading-[20px]'>
            {totalProductPrice} ₽
          </span>
        </div>
      </div>
      <button
        className='flex_start sm:pt-0 gap-5 pt-4'
        onClick={handleRemove}
        type='button'
      >
        <RiDeleteBin6Line
          size={20}
          className='text-grayDark hover:text-primary animate-fade-in cursor-pointer'
        />
      </button>
    </li>
  );
};

export default Product;
