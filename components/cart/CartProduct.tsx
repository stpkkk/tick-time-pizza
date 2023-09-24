import React from 'react';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { Counter } from '../menu';
import { calculateProductPrices } from '@/utils';
import { IAdditionalIngredient, IOption, IProduct } from '@/types';

interface CartProductProps {
  product: IProduct;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const renderIngredientsToRemove = (ingredients: IOption[]) => {
  return (
    <p className='mt-[5px] break-words text-xs font-normal leading-[15px] sm:text-[10px] sm:leading-[0.75rem]'>
      Убрать:&nbsp;
      {ingredients.map((ing) => (
        <span key={ing.id}>{ing.name},&nbsp;</span>
      ))}
    </p>
  );
};

const renderIngredientsToAdd = (ingredients: IAdditionalIngredient[]) => {
  return (
    <p className='mt-[5px] break-words text-xs font-normal leading-[15px] sm:text-[10px]'>
      Добавить:&nbsp;
      {ingredients.map((ing) => (
        <span key={ing.id}>
          {ing.name}&nbsp;({ing.quantity}шт.),&nbsp;
        </span>
      ))}
    </p>
  );
};

const CartProduct: React.FC<CartProductProps> = ({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  const {
    image,
    title,
    selectedSize,
    selectedDough,
    removedIngredients,
    additionalIngredients,
    productQuantity,
    id,
  } = product;

  const { totalProductPrice } = calculateProductPrices(
    product,
    selectedSize || null,
    additionalIngredients,
    productQuantity || 1,
  );

  return (
    <li className='flex_start flex-none gap-5 md:gap-4' key={id}>
      <Image
        src={image}
        alt={title}
        loading='eager'
        className='aspect-square h-full max-h-[76px] w-full max-w-[76px]'
      />
      <div className='flex w-full min-w-[1px] flex-row gap-4 pt-4 sm:items-start sm:gap-3.5 sm:pt-0 md:flex-col md:flex-wrap'>
        <div className='mr-auto min-w-[1px] max-w-full'>
          <span className='text-base font-semibold leading-[15px] sm:text-xs  sm:leading-[0.75rem]'>
            {title}
          </span>
          <p className='mt-[5px] break-words text-xs font-normal leading-[15px] sm:text-[10px] sm:leading-[0.75rem]'>
            {selectedSize?.name},&nbsp;{selectedDough?.name}
          </p>
          <p className='break-words'>
            {removedIngredients &&
              removedIngredients.length > 0 &&
              renderIngredientsToRemove(removedIngredients)}
          </p>
          <p className='break-words'>
            {additionalIngredients.length > 0 &&
              renderIngredientsToAdd(additionalIngredients)}
          </p>
        </div>
        <div className='flex_start sm:flex_center flex-row gap-5 leading-[20px] sm:gap-2'>
          <Counter
            minValue={1}
            value={productQuantity || 1}
            initialValue={productQuantity || 1}
            handleDecrement={onDecrement}
            handleIncrement={onIncrement}
          />
          <p className='whitespace-nowrap text-base font-semibold leading-5 sm:text-xs sm:leading-[20px]'>
            {totalProductPrice} ₽
          </p>
        </div>
      </div>
      <button className='flex_start gap-5 pt-4 sm:pt-0' type='button'>
        <RiDeleteBin6Line
          size={20}
          onClick={onRemove}
          className='cursor-pointer text-grayDark hover:text-primary'
        />
      </button>
    </li>
  );
};

export default CartProduct;
