'use client';

import React from 'react';
import PromoProductsList from './PromoSelectedProductsList';
import PromoTotalHeader from './PromoTotalHeader';
import PromoTotalPrice from './PromoTotalPrice';
import {
  useAppDispatch,
  useAppSelector,
  setTotalPromoProductsQuantity,
} from '@/redux';
import { Promo } from '@/types';

type PromoTotalProps = {
  promo?: Promo;
  addProductToCart: (e: React.FormEvent<HTMLFormElement>) => void;
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
  const { promoProductsList } = useAppSelector((state) => state.menuReducer);

  React.useEffect(() => {
    const newTotalQuantity = promoProductsList.reduce(
      (acc, product) => acc + (product.productQuantity || 0),
      0,
    );
    dispatch(setTotalPromoProductsQuantity(newTotalQuantity));
  }, [promoProductsList, dispatch]);

  return (
    <div className='w-full max-w-[285px] sm:hidden'>
      <div className='wrapper h-auto overflow-hidden'>
        <form
          noValidate
          className='gap-30px flex flex-col'
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
            <div className='sm:px-4 w-full bg-white'>
              <PromoProductsList />
              <div className='sm:hidden'>
                <PromoTotalPrice
                  addProductToCart={addProductToCart}
                  isQuantityMax={isQuantityMax}
                  priceWithDiscount={priceWithDiscount}
                  totalPrice={totalPrice}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromoTotal;
