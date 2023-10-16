'use client';

import React from 'react';
import { RadioGroupOption } from '../common';
import { setSelectedDough, setSelectedSize } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dough, IOption, Promos, Sizes } from '@/types';
import { RadioGroup } from '@headlessui/react';

const ProductSizeSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedSize, selectedDough, selectedPromo } =
    useAppSelector((state) => state.menuReducer);
  const { THIN, TRADITIONAL } = Dough;
  const { SMALL, BIG } = Sizes;
  const { FOUR_BIG_PIZZAS, THREE_PIZZAS_999 } = Promos;

  const getIsDisabledSize = (size: IOption) => {
    return selectedDough?.name === THIN && size.name === SMALL;
  };

  const getIsDisabledDough = (dough: IOption) => {
    return selectedSize?.name === SMALL && selectedDough !== dough;
  };

  const handleSizeChange = (size: IOption) => {
    dispatch(setSelectedSize(size));
  };

  const handleDoughChange = (dough: IOption) => {
    dispatch(setSelectedDough(dough));
  };

  const dough =
    selectedPromo?.title === THREE_PIZZAS_999
      ? selectedProduct?.dough?.filter((d) => d.name === TRADITIONAL)
      : selectedProduct?.dough;

  const getSizes = (promoTitle: string) => {
    switch (promoTitle) {
      case FOUR_BIG_PIZZAS:
        return selectedProduct?.sizes?.filter((size) => size.name === BIG);
      case THREE_PIZZAS_999:
        return selectedProduct?.sizes?.filter((size) => size.name === SMALL);
      default:
        return selectedProduct?.sizes;
    }
  };

  const sizes = getSizes(selectedPromo?.title || '');

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
          {dough?.map((dough) => (
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
