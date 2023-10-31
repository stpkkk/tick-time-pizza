'use client';

import React from 'react';
import Image from 'next/image';
import Counter from './Counter';
import {
  decrementIngredientQuantity,
  incrementIngredientQuantity,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IAdditionalIngredient } from '@/types';

type IngredientsSelectItemProps = {
  ingredient: IAdditionalIngredient;
  isDisabled: boolean;
};

const IngredientsSelectItem: React.FC<IngredientsSelectItemProps> = ({
  ingredient,
  isDisabled,
}) => {
  const dispatch = useAppDispatch();
  const { additionalIngredients, selectedSize } = useAppSelector(
    (state) => state.menuReducer,
  );
  const ingredientItem = additionalIngredients.find(
    (item) => item.id === ingredient.id,
  );
  const ingredientQuantity = ingredientItem?.quantity || 0;
  const ingredientPrice =
    ingredient?.prices.find((item) => item.id === selectedSize?.id)?.price ||
    ingredient?.prices.at(0)?.price;
  const ingredientWeight =
    ingredient?.weights.find((item) => item.id === selectedSize?.id)?.value ||
    ingredient?.weights.at(0)?.value;

  // Reset disabled ingredient quantity to 0
  React.useEffect(() => {
    if (isDisabled) {
      dispatch(decrementIngredientQuantity(ingredient));
    }
  }, [dispatch, ingredient, isDisabled]);

  const handleDecrement = () => {
    if (ingredientQuantity > 0) {
      dispatch(decrementIngredientQuantity(ingredient));
    }
  };

  const handleIncrement = () => {
    if (ingredientQuantity < ingredient.maxQuantity) {
      dispatch(incrementIngredientQuantity(ingredient));
    }
  };

  return (
    <li
      className={`flex flex-row justify-between rounded-2xl px-4 py-2.5 ${
        ingredientQuantity > 0 ? 'bg-yellow' : 'bg-grayLight'
      } ${isDisabled && 'text-grayDark'}`}
    >
      <div className='flex flex-auto flex-grow basis-[calc(100%-7rem)] flex-row items-center gap-5'>
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={27}
          height={27}
          className='h-full max-h-[27px] w-full max-w-[27px]'
        />
        <div className='flex flex-col gap-1.5'>
          <span className='break-words text-sm font-bold leading-[17px] md:text-xs md:leading-[15px]'>
            {ingredient.name}
          </span>
          <span className='whitespace-nowrap text-sm font-normal leading-[17px] md:text-xs md:leading-[15px]'>
            {!isDisabled
              ? `${ingredientWeight} г ${ingredientPrice} ₽`
              : 'Выберите другие параметры'}
          </span>
        </div>
        {!isDisabled ? (
          <div className='ml-auto flex flex-nowrap items-center justify-between gap-2 text-xs sm:text-base'>
            <Counter
              minValue={0}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              initialValue={0}
              maxValue={ingredient.maxQuantity}
              value={ingredientQuantity}
            />
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default IngredientsSelectItem;
