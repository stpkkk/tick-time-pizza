'use client';

import React from 'react';
import { RadioGroupOption } from '../common';
import { setSelectedDough, setSelectedSize } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IOption } from '@/types';
import { RadioGroup } from '@headlessui/react';

type ProductSizeSelectionProps = {
  promoTitle: string;
};

const ProductSizeSelection: React.FC<ProductSizeSelectionProps> = ({
  promoTitle,
}) => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedSize, selectedDough } = useAppSelector(
    (state) => state.menuReducer,
  );

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
    promoTitle === '4 пиццы по цене 3'
      ? selectedProduct?.sizes?.filter((size) => size.name === bigSize)
      : selectedProduct?.sizes;

  const isBigPizzaOnly =
    selectedProduct?.sizes?.at(0) && promoTitle === '4 пиццы по цене 3';

  return (
    <div className='flex flex-col gap-2'>
      <RadioGroup value={selectedSize} onChange={handleSizeChange}>
        <div className='flex flex-row gap-2.5'>
          {sizes?.map((size) => (
            <RadioGroupOption
              key={size.id}
              option={size}
              isChecked={selectedSize === size || isBigPizzaOnly}
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
