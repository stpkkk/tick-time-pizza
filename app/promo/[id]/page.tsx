'use client';

import React from 'react';
import {
  HeaderWithButtonBack,
  Loader,
  ModalProduct,
  ModalPromoProductsList,
  PromoProductsList,
  PromoTotal,
  PromoTotalHeader,
} from '@/components';
import MobilePromoTotal from '@/components/promo/MobilePromoTotal';
import { useProducts, usePromoProducts } from '@/hooks';
import { useAppSelector } from '@/redux';

type PromoProps = {
  params: {
    id: string;
  };
};

const PromoPage: React.FC<PromoProps> = ({ params: { id } }) => {
  const { products, isLoading } = useProducts();

  const { totalPromoProducts } = useAppSelector((state) => state.menuReducer);

  const {
    addPromoProductToCart,
    promo,
    isQuantityMax,
    priceWithDiscount,
    totalPrice,
    isPizzaOfTheDay,
    currentDay,
    promoProducts,
  } = usePromoProducts(products, id);

  const headerText = isPizzaOfTheDay
    ? promo?.title + ' ' + currentDay
    : promo?.title || 'No promo title!';

  if (isLoading)
    return (
      <main className='grid place-items-center min-h-[400px] w-[800px]'>
        <Loader />
      </main>
    );

  return (
    <main className='mt-[90px] sm:mt-[70px] sm:px-0'>
      <HeaderWithButtonBack text={headerText} />
      <div className='hidden sm:flex sm:justify-between bg-yellow px-[30px] py-5 mb-[30px]'>
        <PromoTotalHeader promo={promo} />
      </div>
      <div className='flex justify-between gap-[30px]'>
        <div className='sm:hidden'>
          <PromoProductsList promoProducts={promoProducts} />
        </div>
        <div className='hidden sm:block px-[30px] mb-[30px] w-full'>
          <MobilePromoTotal
            promoProducts={promoProducts}
            isQuantityMax={isQuantityMax}
          />
        </div>
        <PromoTotal
          promo={promo}
          addPromoProductToCart={addPromoProductToCart}
          isQuantityMax={isQuantityMax}
          priceWithDiscount={priceWithDiscount}
          totalPrice={totalPrice}
        />
      </div>

      <ModalPromoProductsList promoProducts={promoProducts} />
      <ModalProduct />
    </main>
  );
};

export default PromoPage;
