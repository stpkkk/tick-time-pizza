'use client';

import React from 'react';
import PromoTotalHeader from './PromoTotalHeader';
import PromoTotalItem from './PromoTotalItem';
import { setTotalPromoProductsQuantity } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Promo } from '@/types';
import { generateUUID } from '@/utils';

type PromoTotalProps = {
  promo?: Promo;
  addProductToCart: any;
  totalPrice: number;
  priceWithDiscount?: number | string;
  isQuantityMax: boolean;
};

const PromoTotal: React.FC<PromoTotalProps> = ({
  promo,
  addProductToCart,
  totalPrice,
  isQuantityMax,
  priceWithDiscount,
}) => {
  const dispatch = useAppDispatch();
  const { totalPromoProductsQuantity, promoProductsList } = useAppSelector(
    (state) => state.menuReducer,
  );

  React.useEffect(() => {
    const newTotalQuantity = promoProductsList.reduce(
      (acc, product) => acc + (product.productQuantity || 0),
      0,
    );
    dispatch(setTotalPromoProductsQuantity(newTotalQuantity));
  }, [promoProductsList, dispatch]);

  return (
    <div className='w-full max-w-[285px] sm:hidden'>
      <div className='rounded-2xl drop-shadow-custom h-auto overflow-hidden bg-white'>
        <form
          noValidate
          className='flex flex-col gap-30px'
          onSubmit={addProductToCart}
        >
          <div className='flex_between bg-yellow px-[30px] py-5'>
            <PromoTotalHeader promo={promo} />
          </div>
          <div className='flex flex-col gap-[30px] p-[30px]'>
            {!isQuantityMax && (
              <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] sm:hidden'>
                Выберите необходимое количество товаров из каталога слева.
              </p>
            )}
            <div className='w-full sm:px-4 bg-white '>
              <ul className='flex flex-col gap-[30px]'>
                {promoProductsList.map((product) => (
                  <li className=' flex flex-col gap-2.5' key={generateUUID()}>
                    <PromoTotalItem
                      product={product}
                      totalPromoProductsQuantity={totalPromoProductsQuantity}
                    />
                  </li>
                ))}
              </ul>
              <div className='flex gap-2.5 sm:justify-center items-center text-sm justify-start my-8'>
                <span className='sm:font-semibold whitespace-nowrap font-bold text-xl'>
                  {priceWithDiscount} ₽
                </span>
                {isQuantityMax ? (
                  <span className='line-through text-grayDark font-semibold whitespace-nowrap text-base'>
                    {totalPrice} ₽
                  </span>
                ) : null}
              </div>
              <button
                className='bg-secondary hover:bg-secondaryLight text-white font-bold py-2 px-4 rounded-2xl disabled:text-grayDark sm:text-xs text-sm disabled:bg-gray w-full h-[60px] uppercase'
                type='submit'
                disabled={!isQuantityMax}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromoTotal;
