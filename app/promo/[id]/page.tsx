'use client';

import React, { useEffect } from 'react';
import {
  HeaderWithButtonBack,
  ModalProduct,
  ModalPromoProductsList,
  CardList,
  PromoTotal,
  PromoTotalHeader,
} from '@/components';
import MobilePromoTotal from '@/components/promo/MobilePromoTotal';
import { promos } from '@/constants';
import { usePromoProducts } from '@/hooks';
import {
  resetPromoProducts,
  setSelectedPromo,
  useAppDispatch,
  useAppSelector,
} from '@/redux';

type PromoProps = {
  params: {
    id: string;
  };
};

const GRID_CLASS =
  'grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 lgMin:grid-cols-3';

const PromoPage: React.FC<PromoProps> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();
  const { isProductsListModalOpen } = useAppSelector(
    (state) => state.menuReducer,
  );

  const {
    addPromoProductToCart,
    promo,
    isQuantityMax,
    priceWithDiscount,
    totalPrice,
    isPizzaOfTheDay,
    currentDay,
    promoProducts,
    isLoading,
  } = usePromoProducts(id);

  const headerText = isPizzaOfTheDay
    ? promo?.title + ' ' + currentDay
    : promo?.title || 'promo title is undefined!';

  useEffect(() => {
    const promo = promos.find((promo) => promo.id === +id);

    dispatch(setSelectedPromo(promo || null));
    dispatch(resetPromoProducts());
    // Cleanup function to reset selected promo when component unmounts
    return () => {
      dispatch(setSelectedPromo(null));
    };
  }, [id, dispatch]);

  return (
    <main className='mt-[90px] sm:mt-[70px] sm:px-0'>
      <div className={`${isProductsListModalOpen ? 'sm:hidden' : ''} `}>
        <HeaderWithButtonBack text={headerText} />
      </div>
      <div className='hidden relative z-40 sm:flex sm:justify-between bg-yellow px-[30px] py-5 mb-[30px]'>
        <PromoTotalHeader promo={promo} />
      </div>
      <div className='flex justify-between gap-[30px]'>
        <div className='sm:hidden w-full'>
          <CardList
            products={promoProducts}
            isLoading={isLoading}
            GRID_CLASS={GRID_CLASS}
          />
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

      <ModalPromoProductsList
        promoProducts={promoProducts}
        isLoading={isLoading}
      />
      <ModalProduct />
    </main>
  );
};

export default PromoPage;
