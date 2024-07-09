import React from 'react';
import Image from 'next/image';
import { ButtonBookmark } from '..';
import ProductCategoryImage from './ProductCategoryImage';
import { usePromoProducts } from '@/hooks';
import {
  setHoveredItemId,
  setIsProductsListModalOpen,
  setModalProductOpen,
  setSelectedProduct,
  setSelectedPromo,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

interface IMenuItemProps {
  products: IProduct[];
  product: IProduct;
}

const MenuItem: React.FC<IMenuItemProps> = ({ product, products }) => {
  const dispatch = useAppDispatch();
  const {
    hoveredItemId,
    totalPromoProductsQuantity,
    selectedPromo,
    isProductsListModalOpen,
  } = useAppSelector((state) => state.menuReducer);
  const { promo } = usePromoProducts(products);

  const isItemHovered = hoveredItemId === product.id;
  const starterPrice =
    product.prices?.find((product) => product.id === 0)?.value || 0;

  const handleMouseEnterItem = () => {
    if (totalPromoProductsQuantity !== selectedPromo?.maxValue || !promo)
      dispatch(setHoveredItemId(product.id));
  };

  const handleMouseLeaveItem = () => {
    dispatch(setHoveredItemId(null));
  };

  const handleClickProduct = (clickedProduct: IProduct) => {
    if (totalPromoProductsQuantity !== selectedPromo?.maxValue || !promo) {
      const selectedProduct = products?.find(
        (product) => product.id === clickedProduct.id,
      );

      dispatch(setSelectedProduct(selectedProduct || null));
      dispatch(setSelectedPromo(promo || null));
      dispatch(setModalProductOpen(true));

      if (isProductsListModalOpen) {
        dispatch(setIsProductsListModalOpen(false));
      }
    }
  };

  return (
    <li
      className='relative flex h-full w-full max-w-[255px] cursor-pointer flex-col rounded-2xl bg-white sm:max-w-[420px] md:p-4 sm:drop-shadow-custom'
      onMouseEnter={handleMouseEnterItem}
      onMouseLeave={handleMouseLeaveItem}
    >
      <div className='absolute right-0 top-0 z-[1] sm:right-2 sm:top-2 sm:p-2'>
        <ButtonBookmark product={product} />
      </div>
      <div className='-left-1 sm:p-2 absolute top-0 z-20 flex flex-col gap-2'>
        <ProductCategoryImage product={product} />
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
              className={`${isItemHovered && 'opacity-50 animate-fade-in'}`}
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
            className='btn_yellow h-[45px] sm:h-[32px] btn_disabled max-w-[112px] uppercase'
            disabled={
              promo && totalPromoProductsQuantity === selectedPromo?.maxValue
            }
            type='button'
          >
            Выбрать
          </button>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
