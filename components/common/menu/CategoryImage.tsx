import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/types';
import { generateUUID } from '@/utils';

interface ICategoryImageProps {
  product: IProduct;
}

const CategoryImage: React.FC<ICategoryImageProps> = ({ product }) => {
  return (
    <>
      {product.categories?.map((cat) => (
        <div
          className='sm:left-2 sm:top-2 sm:p-2 bg-white rounded-full'
          key={generateUUID()}
        >
          <Image
            src={cat.image ? cat.image : ''}
            alt={cat.title}
            width={16}
            height={16}
          />
        </div>
      ))}
    </>
  );
};

export default CategoryImage;
