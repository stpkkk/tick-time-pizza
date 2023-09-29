'use client';

import React, { useEffect } from 'react';
import { RadioGroupOption } from '../common';
import { categories } from '@/constants';
import { setSelectedCategory } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RadioGroup } from '@headlessui/react';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.menuReducer.selectedCategory,
  );

  useEffect(() => {
    // Set the default selected category
    if (!selectedCategory) {
      dispatch(setSelectedCategory(categories[0]));
    }
  }, [selectedCategory, dispatch]);

  return (
    <div className='flex_center my-[30px] max-w-full sm:my-4 '>
      <RadioGroup
        value={selectedCategory}
        onChange={(category) => dispatch(setSelectedCategory(category))}
        className='no-scrollbar scroll flex scroll-px-4 flex-row  gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap md:gap-2'
      >
        <div className='min-w-[0.5rem]' />
        {categories.map((category) => (
          <RadioGroupOption
            key={category.id}
            option={category}
            isChecked={selectedCategory === category}
            className='w-auto px-[30px] py-[20px] leading-[20px] sm:px-3 sm:py-[10px]'
          />
        ))}
        <div className='min-w-[0.5rem]' />
      </RadioGroup>
    </div>
  );
};

export default Categories;
