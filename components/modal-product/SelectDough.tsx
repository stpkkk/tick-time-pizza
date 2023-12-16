import React from 'react';
import { RadioButton } from '../common';
import { setSelectedDough } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dough, IOption, Promos, Sizes } from '@/types';

const SelectDough: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedSize, selectedDough, selectedPromo } =
    useAppSelector((state) => state.menuReducer);

  const dough =
    selectedPromo?.title === Promos.THREE_PIZZAS_999
      ? selectedProduct?.dough?.filter((d) => d.name === Dough.TRADITIONAL)
      : selectedProduct?.dough;

  const getIsDisabledDough = (dough: IOption) => {
    return selectedSize?.name === Sizes.SMALL && selectedDough !== dough;
  };

  const handleDoughChange = (dough: IOption) => {
    dispatch(setSelectedDough(dough));
    console.log(dough);
  };

  const isChecked = (value?: IOption) => selectedProduct?.dough === value?.name;

  return (
    <ul className='grid grid-flow-col auto-cols-fr gap-2.5'>
      {dough?.map((dough) => (
        <li key={dough.id}>
          <RadioButton
            id={dough?.id?.toString()}
            onChange={() => handleDoughChange(dough)}
            checked={isChecked(dough)}
            value={dough?.name?.toString()}
            name={dough?.name?.toString()}
            className='min-h-[60px] flex_center sm:min-h-[50px]'
            innerHTML={
              <span className='text-sm font-bold sm:text-[12px]'>
                {dough?.name}
              </span>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default SelectDough;
