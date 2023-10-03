import React from 'react';
import Image from 'next/image';
import pizza from '../../../public/assets/icons/pizza.svg';
import { IProduct } from '@/types';

type ProductListProps = {
  products: IProduct[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul
      className='grid grid-cols-2 gap-7 sm:no-scrollbar sm:scroll sm:flex sm:scroll-px-4 flex-row sm:gap-4 sm:overflow-x-scroll sm:scroll-smooth whitespace-nowrap w-full sm:h-[135px]'
      role='tabpanel'
    >
      {products.map((product) => (
        <li className='flex flex-none gap-4 mb-6' key={product.id}>
          <Image
            src={product.image}
            alt={product.title}
            placeholder='blur'
            blurDataURL={pizza.src}
            width={150}
            height={150}
            className='aspect-square h-full max-h-[150px] w-full max-w-[150px] sm:max-h-[102px] sm:max-w-[102px]'
          />
          <div className='flex justify-between flex-col gap-4 font-bold'>
            <span className='block sm:text-xs whitespace-pre-wrap max-w-[150px]'>
              {product.title}
            </span>
            <span className='block sm:text-xs'>
              {product.prices[0].price} ₽
            </span>
            <button
              className='btn_yellow min-w-[150px] sm:max-w-[100px] sm:h-[35px]'
              type='button'
            >
              Добавить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
