import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { calculateProductPrices } from '@/utils';
import { IProduct } from '@/types';

interface HeaderCartItemProps {
  product: IProduct;
  onRemove: (productUUID: number) => void;
}

const HeaderCartItem: React.FC<HeaderCartItemProps> = ({
  product,
  onRemove,
}) => {
  const totalProductPrice = calculateProductPrices(
    product,
    product.selectedSize || null,
    product.additionalIngredients,
    product.productAmount || 1,
  ).totalProductPrice;

  return (
    <div>
      <div className='flex flex-row gap-3'>
        <p className='text-[14px] md:text-sm font-semibold mr-auto break-words'>
          {product.title}
        </p>
        <p className='text-[14px] md:text-sm whitespace-nowrap'>
          {product.productAmount} шт.
        </p>
        <p className='text-[14px] md:text-sm font-semibold w-10 md:w-16 text-center whitespace-nowrap'>
          {totalProductPrice} ₽
        </p>
        <button type='button' onClick={() => onRemove(product.uuid || 0)}>
          <RiDeleteBin6Line
            size={15}
            className='text-grayDark cursor-pointer hover:text-primary'
          />
        </button>
      </div>
      <p className='text-[12px] md:text-xs md:leading-[15px] font-normal break-words'>
        {product.selectedSize?.name},{product.selectedDough?.name}
      </p>
      {product.removedIngredients && product.removedIngredients.length > 0 && (
        <p className='text-[12px] md:text-xs md:leading-[15px] font-normal break-words'>
          Убрать:&nbsp;
          {product.removedIngredients?.map((ing) => (
            <span key={ing.id}>{ing.name},&nbsp;</span>
          ))}
        </p>
      )}
      {product.additionalIngredients.length > 0 && (
        <p className='text-[12px] md:text-xs md:leading-[15px] font-normal break-words'>
          Добавить:&nbsp;
          {product.additionalIngredients.map((ing) => (
            <span key={ing.id}>
              {ing.name}&nbsp;({ing.amount}шт.),&nbsp;
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default HeaderCartItem;
