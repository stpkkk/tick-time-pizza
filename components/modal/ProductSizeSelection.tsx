'use client';

import React from 'react';
import { RadioGroupOption } from '../common';
import { setSelectedDough, setSelectedSize } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IOption, Promos } from '@/types';
import { RadioGroup } from '@headlessui/react';

const ProductSizeSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedSize, selectedDough, selectedPromo } =
    useAppSelector((state) => state.menuReducer);

  const thinDough = 'Тонкое';
  const smallSize = 23;
  const bigSize = 33;

  const getIsDisabledSize = (size: IOption) => {
    return selectedDough?.name === thinDough && size.name === smallSize;
  };

  const getIsDisabledDough = (dough: IOption) => {
    return selectedSize?.name === smallSize && selectedDough !== dough;
  };

  const handleSizeChange = (size: IOption) => {
    dispatch(setSelectedSize(size));
  };

  const handleDoughChange = (dough: IOption) => {
    dispatch(setSelectedDough(dough));
  };

  const sizes =
    selectedPromo?.title === Promos.FOUR_BIG_PIZZAS
      ? selectedProduct?.sizes?.filter((size) => size.name === bigSize)
      : selectedProduct?.sizes;

  return (
    <div className='flex flex-col gap-2'>
      <RadioGroup value={selectedSize} onChange={handleSizeChange}>
        <div className='flex flex-row gap-2.5'>
          {sizes?.map((size) => (
            <RadioGroupOption
              key={size.id}
              option={size}
              isChecked={selectedSize === size}
              isDisabled={getIsDisabledSize(size)}
              className='flex_center h-[60px] w-full leading-[15px]'
            />
          ))}
        </div>
      </RadioGroup>
      <RadioGroup value={selectedDough} onChange={handleDoughChange}>
        <div className='flex flex-row gap-2.5'>
          {selectedProduct?.dough?.map((dough) => (
            <RadioGroupOption
              key={dough.id}
              option={dough}
              isChecked={dough === selectedDough}
              isDisabled={getIsDisabledDough(dough)}
              className='flex_center h-[60px] w-full leading-[15px]'
            />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ProductSizeSelection;
