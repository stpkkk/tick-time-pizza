'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  decrementIngredientQuantity,
  incrementIngredientQuantity,
} from '@/redux/features/menuSlice';
import Image from 'next/image';

import Counter from './Counter';
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

  const ingredientItem = useAppSelector((state) =>
    state.menuReducer.additionalIngredients.find(
      (item) => item.id === ingredient.id
    )
  );
  const selectedSize = useAppSelector(
    (state) => state.menuReducer.selectedSize
  );

  const ingredientQuantity = ingredientItem?.quantity || 0;
  const ingredientPrice = ingredient?.prices.find(
    (item) => item.id === selectedSize?.id
  )?.price;
  const ingredientWeight = ingredient?.weights.find(
    (item) => item.id === selectedSize?.id
  )?.value;

  // Reset disabled ingredient quantity to 0
  useEffect(() => {
    if (isDisabled) {
      dispatch(decrementIngredientQuantity({ ingredient }));
    }
  }, [dispatch, ingredient, isDisabled]);

  const handleDecrement = () => {
    if (ingredientQuantity > 0) {
      dispatch(decrementIngredientQuantity({ ingredient }));
    }
  };

  const handleIncrement = () => {
    if (ingredientQuantity < ingredient.maxQuantity) {
      dispatch(incrementIngredientQuantity({ ingredient }));
    }
  };

  return (
    <li
      className={`flex justify-between flex-row px-4 py-2.5 rounded-2xl ${
        ingredientQuantity > 0 ? 'bg-yellow' : 'bg-grayLight'
      } ${isDisabled && 'text-grayDark'}`}
    >
      <div className='flex flex-grow flex-auto basis-[calc(100%-7rem)] items-center flex-row gap-5'>
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={27}
          height={27}
          className='w-full h-full max-w-[27px] max-h-[27px]'
        />
        <div className='flex flex-col gap-1.5'>
          <span className='md:text-xs md:leading-[15px] text-sm leading-[17px] font-bold break-words'>
            {ingredient.name}
          </span>
          <span className='md:text-xs md:leading-[15px] text-sm leading-[17px] font-normal whitespace-nowrap'>
            {!isDisabled
              ? `${ingredientWeight} г ${ingredientPrice} ₽`
              : 'Выберите другие параметры'}
          </span>
        </div>
        {!isDisabled && (
          <div className='gap-2 flex justify-between flex-nowrap items-center text-xs sm:text-base ml-auto'>
            <Counter
              minValue={0}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              initialValue={0}
              maxValue={ingredient.maxQuantity}
              value={ingredientQuantity}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default IngredientsSelectItem;
