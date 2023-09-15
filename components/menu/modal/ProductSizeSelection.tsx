'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSelectedDough, setSelectedSize } from '@/redux/features/menuSlice';
import { RadioGroup } from '@headlessui/react';

import { RadioGroupOption } from '@/components/common';
import { IOption } from '@/types';

const ProductSizeSelection: React.FC = () => {
  const { selectedProduct, selectedSize, selectedDough } = useAppSelector(
    (state) => state.menuReducer,
  );

  const dispatch = useAppDispatch();

  const thinDough = 'Тонкое';
  const smallSize = 23;

  const getWeightBySize = () => {
    return selectedProduct?.weights.find(
      (item) => item.id === selectedSize?.id,
    );
  };

  const getWeightByDough = () => {
    const isThinDough = selectedDough?.name === thinDough;
    return isThinDough
      ? selectedProduct?.weights.slice(-2)
      : selectedProduct?.weights.slice(0, 1);
  };

  const getTotalWeight = () => {
    const weightBySize = getWeightBySize();
    const weightByDough = getWeightByDough();

    if (!selectedDough || !selectedProduct || !weightBySize || !weightByDough) {
      return null;
    }

    if (selectedDough.name === thinDough) {
      const selectedSizeIndex = selectedProduct.sizes.findIndex(
        (_, i) => i + 1 === selectedSize?.id,
      );
      return weightByDough[selectedSizeIndex]?.weight;
    } else {
      return weightBySize.weight;
    }
  };

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

  return (
    <>
      <div>
        <span className='font-bold md:text-sm md:leading-[15px] text-base leading-5 md:mb-4 mb-5'>
          Вес:&nbsp;
        </span>
        <span>{getTotalWeight()} г</span>
      </div>
      <div className='flex flex-col gap-2'>
        <RadioGroup value={selectedSize} onChange={handleSizeChange}>
          <div className='flex flex-row gap-2.5'>
            {selectedProduct?.sizes.map((size, i) => (
              <RadioGroupOption
                key={size.id}
                option={size}
                isChecked={selectedSize === size}
                isDisabled={getIsDisabledSize(size)}
                className='leading-[15px] w-full h-[60px] flex_center'
              />
            ))}
          </div>
        </RadioGroup>
        <RadioGroup value={selectedDough} onChange={handleDoughChange}>
          <div className='flex flex-row gap-2.5'>
            {selectedProduct?.dough.map((dough) => (
              <RadioGroupOption
                key={dough.id}
                option={dough}
                isChecked={dough === selectedDough}
                isDisabled={getIsDisabledDough(dough)}
                className='leading-[15px] w-full h-[60px] flex_center'
              />
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default ProductSizeSelection;
