'use client';

import React from 'react';
import { InputCheckbox } from '../common';
import ModalSubTitle from './ModalSubTitle';
import { setRemovedIngredients } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IOption } from '@/types';

const IngredientsRemove: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, removedIngredients } = useAppSelector(
    (state) => state.menuReducer,
  );

  const handleIngredientChange = (ingredient: IOption) => {
    const updatedIngredients = removedIngredients.includes(ingredient)
      ? removedIngredients.filter((item: IOption) => item !== ingredient)
      : [...removedIngredients, ingredient];

    dispatch(setRemovedIngredients(updatedIngredients));
  };

  return selectedProduct?.removeIngredients ? (
    <div>
      <ModalSubTitle text='Убрать ингредиенты:' />
      <div>
        <ul className='flex w-full flex-row flex-wrap gap-2.5'>
          {selectedProduct?.removeIngredients.map((ingredient: IOption) => (
            <li key={ingredient.id}>
              <InputCheckbox
                option={ingredient}
                isChecked={removedIngredients.includes(ingredient)}
                className={`h-[60px] sm:h-[45px] whitespace-nowrap px-4`}
                crossed={`${
                  removedIngredients.includes(ingredient) && 'line-through'
                }`}
                handleChange={handleIngredientChange}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default IngredientsRemove;
