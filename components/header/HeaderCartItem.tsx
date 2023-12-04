import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SelectedProductOptions } from '../common';
import { IProduct } from '@/types';
import { calculateProductPrices } from '@/utils';

interface HeaderCartItemProps {
  product: IProduct;
  onRemove: (productUUID: string) => void;
}

const HeaderCartItem: React.FC<HeaderCartItemProps> = ({
  product,
  onRemove,
}) => {
  const { totalProductPrice } = calculateProductPrices(
    product,
    product.selectedSize || null,
    product.selectedIngredients || [],
    product.productQuantity || 1,
  );

  return (
    <div className='flex flex-row items-start gap-2'>
      <SelectedProductOptions product={product} />
      <div className='flex gap-3'>
        <p className='whitespace-nowrap text-[14px] md:text-sm'>
          {`${product.productQuantity} шт.`}
        </p>
        <p className='w-10 whitespace-nowrap text-center text-[14px] font-semibold md:w-16 md:text-sm mr-auto'>
          {`${totalProductPrice} ₽`}
        </p>
        <button type='button' onClick={() => onRemove(product.uuid || '')}>
          <RiDeleteBin6Line
            size={15}
            className='cursor-pointer text-grayDark hover:text-primary'
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderCartItem;
