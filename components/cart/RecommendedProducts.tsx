import React from 'react';
import Image from 'next/image';
import pizza from '../../public/assets/icons/pizza.svg';
import {
  setModalProductOpen,
  setSelectedProduct,
} from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IProduct } from '@/types';

type RecommendedProductsProps = {
  products: IProduct[];
};

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  products,
}) => {
  const dispatch = useAppDispatch();

  const handleClickProduct = (clickedProduct: IProduct) => {
    const selectedProduct = products.find(
      (product) => product.id === clickedProduct.id,
    );

    if (selectedProduct) {
      dispatch(setSelectedProduct(selectedProduct));
    }

    dispatch(setModalProductOpen(true));
  };

  return (
    <ul
      className='grid grid-cols-2 gap-7 md:no-scrollbar md:scroll md:flex md:scroll-px-4 md:flex-row sm:gap-4 md:overflow-x-scroll md:scroll-smooth whitespace-nowrap w-full sm:h-[135px]'
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
            className='aspect-square h-full max-h-[150px] w-full max-w-[150px] sm:max-h-[102px] sm:max-w-[102px] lg:max-h-[90px] lg:max-w-[90px]'
          />
          <div className='flex flex-col justify-between gap-4 font-bold'>
            <span className='block sm:text-xs whitespace-pre-wrap max-w-[150px]'>
              {product.title}
            </span>
            <span className='block sm:text-xs'>
              {product.prices[0].value} ₽
            </span>
            <button
              onClick={() => handleClickProduct(product)}
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

export default RecommendedProducts;
