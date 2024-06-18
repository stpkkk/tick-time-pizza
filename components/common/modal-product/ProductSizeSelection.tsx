'use client';

import React from 'react';
import { InputCheckbox } from '..';
import { setSelectedDough, setSelectedSize } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dough, IOption, Promos, Sizes } from '@/types';
import { getPromoProductSizes } from '@/utils';

const ProductSizeSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedSize, selectedDough, selectedPromo } =
    useAppSelector((state) => state.menuReducer);
  const dough =
    selectedPromo?.title === Promos.THREE_PIZZAS_999
      ? selectedProduct?.dough?.filter(
          (d: IOption) => d.value === Dough.TRADITIONAL,
        )
      : selectedProduct?.dough;
  const sizes = getPromoProductSizes(
    selectedPromo?.title || '',
    selectedProduct,
  );

  const getIsDisabledSize = (size: IOption) => {
    return selectedDough?.value === Dough.THIN && size.value === Sizes.SMALL;
  };

  const getIsDisabledDough = (dough: IOption) => {
    return selectedSize?.value === Sizes.SMALL && selectedDough !== dough;
  };

  const handleSizeChange = (size: IOption) => {
    dispatch(setSelectedSize(size));
  };

  const handleDoughChange = (dough: IOption) => {
    dispatch(setSelectedDough(dough));
  };

  return (
    <div className='flex flex-col gap-2'>
      <ul className='flex flex-row gap-2.5'>
        {sizes?.map((size: IOption) => (
          <li key={size.id} className='w-full'>
            <InputCheckbox
              option={size}
              isChecked={selectedSize === size}
              isDisabled={getIsDisabledSize(size)}
              className='h-[60px]'
              onChange={handleSizeChange}
            />
          </li>
        ))}
      </ul>
      <ul className='flex flex-row gap-2.5'>
        {dough?.map((dough: IOption) => (
          <li key={dough.id} className='w-full'>
            <InputCheckbox
              key={dough.id}
              option={dough}
              isChecked={dough === selectedDough}
              isDisabled={getIsDisabledDough(dough)}
              className='h-[60px]'
              onChange={handleDoughChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSizeSelection;
