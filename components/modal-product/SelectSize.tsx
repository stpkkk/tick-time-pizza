import React from 'react';
import { RadioButton } from '../common';
import { setSelectedSize } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dough, IOption, Sizes } from '@/types';
import { getPromoProductSizes } from '@/utils';

const SelectSize: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedSize, selectedDough, selectedPromo } =
    useAppSelector((state) => state.menuReducer);

  const sizes = getPromoProductSizes(
    selectedPromo?.title || '',
    selectedProduct,
  );

  const getIsDisabledSize = (size: IOption) => {
    return selectedDough?.name === Dough.THIN && size.name === Sizes.SMALL;
  };

  const handleSizeChange = (size: IOption) => {
    dispatch(setSelectedSize(size));
  };

  const isChecked = (value?: IOption) => selectedSize?.id === value?.id;

  return (
    <ul className='grid grid-flow-col auto-cols-fr gap-2.5'>
      {sizes?.map((size) => (
        <li key={size.id}>
          <RadioButton
            id={size?.id?.toString()}
            onChange={() => handleSizeChange(size)}
            checked={isChecked(size)}
            value={size?.name?.toString()}
            name={size?.name?.toString()}
            className='min-h-[60px] flex_center sm:min-h-[50px]'
            innerHTML={
              <span className='text-sm font-bold sm:text-[12px]'>
                {size?.name}
              </span>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default SelectSize;
