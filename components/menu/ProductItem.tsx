import React from 'react';
import Image from 'next/image';
import pizza from '../../public/assets/icons/pizza.svg';
import { BookmarkButton } from '../common';
import { menu } from '@/constants';
import {
  setSelectedProduct,
  setHoveredItemId,
  setModalProductOpen,
  setSelectedPromo,
  setIsProductsListModalOpen,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct, Promo } from '@/types';

interface IProductItemProps {
  product: IProduct;
  promo?: Promo;
}

const ProductItem: React.FC<IProductItemProps> = ({ product, promo }) => {
  const dispatch = useAppDispatch();
  const {
    hoveredItemId,
    totalPromoProductsQuantity,
    selectedPromo,
    isProductsListModalOpen,
  } = useAppSelector((state) => state.menuReducer);

  const isItemHovered = hoveredItemId === product.id;
  const starterPrice = product.prices.find((product) => product.id === 0)
    ?.price;

  const handleMouseEnterItem = () => {
    if (totalPromoProductsQuantity !== selectedPromo?.maxValue || !promo)
      dispatch(setHoveredItemId(product.id));
  };

  const handleMouseLeaveItem = () => {
    dispatch(setHoveredItemId(null));
  };

  const handleClickProduct = (clickedProduct: IProduct) => {
    if (totalPromoProductsQuantity !== selectedPromo?.maxValue || !promo) {
      const selectedProduct = menu.find(
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
      <div
        className='flex h-full flex-col justify-between'
        onClick={() => handleClickProduct(product)}
      >
        <div className='flex flex-col gap-4'>
          <div className='relative w-full h-auto max-w-[255px] aspect-square cursor-pointer rounded-2xl self-center'>
            <Image
              src={product.image}
              alt={product.title}
              placeholder='blur'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              priority
              className={`${isItemHovered && 'opacity-50'}`}
            />
          </div>
          <span className='mb-4 block font-semibold leading-5'>
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
            className={`btn_yellow btn_disabled max-w-[112px]`}
            disabled={
              promo && totalPromoProductsQuantity === selectedPromo?.maxValue
            }
            type='button'
          >
            Выбрать
          </button>
        </div>
      </div>
      <div className='absolute right-0 top-0 z-[1] sm:right-2 sm:top-2 sm:p-2'>
        <BookmarkButton product={product} />
      </div>
      {!promo ? (
        <div className='absolute left-0 top-0 z-[1] flex flex-col	 gap-1 rounded-full bg-white p-2 sm:left-2 sm:top-2 sm:p-2'>
          {product.categories?.map((cat) => (
            <Image
              src={cat.image ? cat.image : ''}
              alt={cat.title}
              width={16}
              height={16}
              key={cat.id}
            />
          ))}
        </div>
      ) : null}
    </li>
  );
};

export default ProductItem;
