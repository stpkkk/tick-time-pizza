import React from 'react';
import Image from 'next/image';
import { ButtonBookmark } from '..';
import CategoryImage from './CategoryImage';
import { usePromoProducts } from '@/hooks';
import {
  setIsProductsListModalOpen,
  setModalProductOpen,
  setSelectedProduct,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

interface ICardProps {
  product: IProduct;
  products: IProduct[];
}

const Card: React.FC<ICardProps> = ({ product, products }) => {
  const dispatch = useAppDispatch();
  const { totalPromoProducts, selectedPromo, isProductsListModalOpen } =
    useAppSelector((state) => state.menuReducer);
  const { promo } = usePromoProducts();

  const starterPrice =
    product.prices?.find((product) => product.id === 0)?.value || 0;

  const handleClickProduct = (clickedProduct: IProduct) => {
    if (totalPromoProducts !== selectedPromo?.maxValue || !promo) {
      const selectedProduct = products?.find(
        (product) => product.id === clickedProduct.id,
      );

      dispatch(setSelectedProduct(selectedProduct || null));
      dispatch(setModalProductOpen(true));

      if (isProductsListModalOpen) {
        dispatch(setIsProductsListModalOpen(false));
      }
    }
  };

  return (
    <li className='relative flex h-full w-full max-w-[255px] cursor-pointer flex-col rounded-2xl bg-white sm:max-w-[420px] md:p-4 sm:drop-shadow-custom group'>
      <div className='absolute right-0 top-0 z-[1] sm:right-2 sm:top-2 sm:p-2'>
        <ButtonBookmark product={product} />
      </div>
      <div className='-left-1 sm:p-2 absolute top-0 z-20 flex flex-col gap-2'>
        <CategoryImage product={product} />
      </div>
      <div
        className='flex flex-col justify-between h-full'
        onClick={() => handleClickProduct(product)}
      >
        <div className='flex flex-col gap-4'>
          <div className='relative w-full h-auto max-w-[255px] aspect-square cursor-pointer rounded-2xl self-center'>
            <Image
              src={product.image || ''}
              alt={product.title || ''}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              priority
              className='group-hover:opacity-50 group-hover:animate-fade-in'
            />
          </div>
          <span className='block mb-4 font-semibold leading-5'>
            {product.title}
          </span>
        </div>
        <div>
          <p className='mb-4 text-[14px] leading-[15px] sm:text-[12px]'>
            {product.ingredients}
          </p>
        </div>
        <div className='flex_between'>
          <span className='font-semibold'>{`от ${starterPrice} ₽`}</span>
          <button
            className='btn_yellow h-[45px] sm:h-[32px] btn_disabled max-w-[112px] uppercase group-hover:opacity-50'
            disabled={promo && totalPromoProducts === selectedPromo?.maxValue}
            type='button'
          >
            Выбрать
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
