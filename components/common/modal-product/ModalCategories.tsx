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
      {selectedProduct?.categories
        ? selectedProduct?.categories.map((cat) => (
            <li className='gap-2 flex_center' key={cat.id}>
              <Image
                src={cat.image || ''}
                alt={cat.title}
                className='w-5 h-auto'
              />
              <span className='text-[0.75rem] font-bold md:text-xs md:leading-[15px]'>
                {cat.title}
              </span>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ModalCategories;
