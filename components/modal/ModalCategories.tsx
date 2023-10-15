import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks';

const ModalCategories: React.FC = () => {
  const { selectedProduct } = useAppSelector((state) => state.menuReducer);

  return (
    <ul
      className={`${
        selectedProduct?.categories ? 'block' : 'hidden'
      } flex items-center gap-4 sm:justify-center`}
    >
      {selectedProduct?.categories &&
        selectedProduct?.categories.map((cat) => (
          <li className='flex_center gap-2' key={cat.id}>
            <Image
              src={cat.image || ''}
              alt={cat.title}
              className='h-auto w-5'
            />
            <span className='text-[0.75rem] font-bold md:text-xs md:leading-[15px]'>
              {cat.title}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default ModalCategories;
