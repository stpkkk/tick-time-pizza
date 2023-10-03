import React from 'react';
import { useAppSelector } from '@/redux/hooks';

const ProductTitle: React.FC = () => {
  const title = useAppSelector((state) => state.menuReducer.selectedProduct)
    ?.title;

  return (
    <h4 className='font-zheldor text-[2.5rem] uppercase leading-[3rem] sm:text-[1.5rem] sm:leading-[1.75rem]'>
      {title}
    </h4>
  );
};

export default ProductTitle;
