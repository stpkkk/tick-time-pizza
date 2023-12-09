import React from 'react';
import { useAppSelector } from '@/redux/hooks';

const ProductIngredients: React.FC = () => {
  const { selectedProduct } = useAppSelector((state) => state.menuReducer);

  return (
    <p className='block text-sm leading-[1.25rem] sm:mb-[16px] sm:text-[0.75rem]'>
      {selectedProduct?.ingredients}
    </p>
  );
};

export default ProductIngredients;
