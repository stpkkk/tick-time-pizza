'use client';

import React from 'react';
import SelectDough from './SelectDough';
import SelectSize from './SelectSize';

const ProductSizeSelection: React.FC = () => {
  return (
    <div className='flex flex-col gap-2'>
      <SelectSize />
      <SelectDough />
    </div>
  );
};

export default ProductSizeSelection;
