'use client';

import React from 'react';
import ModalSubTitle from './ModalSubTitle';
import { RadioGroupOption } from '@/components/common';
import { setRemovedIngredients } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IOption } from '@/types';
import { RadioGroup } from '@headlessui/react';

const IngredientsRemove: React.FC = () => {
  const dispatch = useAppDispatch();

  const { selectedProduct, removedIngredients } = useAppSelector(
    (state) => state.menuReducer,
  );

  const handleIngredientChange = (ingredient: IOption) => {
    const updatedIngredients = removedIngredients.includes(ingredient)
      ? removedIngredients.filter((item) => item !== ingredient)
      : [...removedIngredients, ingredient];
    dispatch(setRemovedIngredients(updatedIngredients));
  };

  return (
    selectedProduct?.removeIngredients && (
      <div>
        <ModalSubTitle text='Убрать ингредиенты:' />
        <RadioGroup value={null} onChange={handleIngredientChange}>
          <div className='flex w-full flex-row flex-wrap gap-2.5'>
            {selectedProduct?.removeIngredients.map((ingredient) => (
              <RadioGroupOption
                key={ingredient.id}
                option={ingredient}
                isChecked={removedIngredients.includes(ingredient)}
                className={`flex_center h-[60px] whitespace-nowrap px-4 py-2.5 leading-[15px]`}
                crossed={`${
                  removedIngredients.includes(ingredient) && 'line-through'
                }`}
              />
            ))}
          </div>
        </RadioGroup>
      </div>
    )
  );
};

export default IngredientsRemove;
