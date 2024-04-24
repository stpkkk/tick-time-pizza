'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import promoImg from '../../../public/assets/icons/promo.svg';
import {
  HeaderWithButtonBack,
  ModalProduct,
  ModalPromoProductsList,
  PromoProductsList,
  PromoSelectedProductsList,
  PromoTotal,
  PromoTotalHeader,
} from '@/components';
import { promos } from '@/constants';
import { useLocalStorage } from '@/hooks';
import {
  addToCart,
  resetPromoProductsList,
  setIsProductsListModalOpen,
  setPromoDiscount,
  setSelectedPromo,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { Prices, Promos } from '@/types';
import {
  calculateProductPrices,
  calculateTotalPrice,
  generateUUID,
  getPizzaOfTheDay,
  getPriceWithDiscount,
} from '@/utils';

type PromoProps = {
  params: {
    id: string;
  };
};

const PromoPage: React.FC<PromoProps> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    isProductsListModalOpen,
    promoProductsList,
    selectedProduct,
    selectedSize,
    productQuantity,
    totalPromoProductsQuantity,
    selectedPromo,
  } = useAppSelector((state) => state.menuReducer);
  const promo = promos.find((p) => p.id === +id);
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isPizzaOfTheDay = promo?.title === Promos.PIZZA_OF_THE_DAY;
  const promoTitle = promo?.title ?? '';
  const { totalPrice } = calculateTotalPrice(promoProductsList);
  const { productPrice } = calculateProductPrices(
    selectedProduct,
    selectedSize,
    [],
    productQuantity,
  );
  const isQuantityMax = totalPromoProductsQuantity === promo?.maxValue;
  const fourBigPizzasPrice =
    (productPrice && totalPrice - productPrice) ?? '-' + Prices.BIG;
  const pizzaDiscount100 = (productPrice && totalPrice - 100) ?? -100;
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const priceWithDiscount = getPriceWithDiscount(
    promo?.title || '',
    fourBigPizzasPrice,
    pizzaDiscount100,
  );
  const discount =
    typeof priceWithDiscount === 'number' ? totalPrice - priceWithDiscount : 0;

  const addProductToCart = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const uuid = generateUUID();
      const title = `Акция: ${
        isPizzaOfTheDay
          ? selectedPromo?.title + ' ' + currentDay
          : selectedPromo?.title
      }`;

      const updatedPromoProduct = {
        ...selectedProduct,
        uuid,
        productQuantity: 1,
        title,
        image: promoImg,
        totalPrice: priceWithDiscount,
        promoProducts: promoProductsList,
        selectedIngredients: [],
        discount,
      };

      const updatedCartProduct = [...cartProductInLS, updatedPromoProduct];

      dispatch(addToCart(updatedCartProduct));
      await setCartProductInLS(updatedCartProduct);

      if (priceWithDiscount) {
        dispatch(setPromoDiscount(priceWithDiscount));
      }

      dispatch(resetPromoProductsList());
      dispatch(setSelectedPromo(null));
      router.push('/promo');
    },
    [
      isPizzaOfTheDay,
      selectedPromo?.title,
      currentDay,
      selectedProduct,
      priceWithDiscount,
      promoProductsList,
      discount,
      cartProductInLS,
      dispatch,
      setCartProductInLS,
      router,
    ],
  );

  const handleClickOpenProductsList = () => {
    dispatch(setIsProductsListModalOpen(true));
  };

  return (
    <main className='mt-[90px] sm:mt-[70px] sm:px-0'>
      <HeaderWithButtonBack
        text={isPizzaOfTheDay ? promoTitle + ' ' + currentDay : promoTitle}
      />
      <div className='hidden sm:flex sm:justify-between bg-yellow px-[30px] py-5 mb-[30px]'>
        <PromoTotalHeader promo={promo} />
      </div>
      <div className='flex justify-between gap-[30px]'>
        <div className='sm:hidden'>
          <PromoProductsList promo={promo} />
        </div>
        <div className='hidden sm:block px-[30px] mb-[30px] w-full'>
          {promoProductsList.length > 0 && (
            <div className='mb-[30px]'>
              <PromoSelectedProductsList />
            </div>
          )}
          {!isQuantityMax ? (
            <>
              <span className='block mb-4 text-sm font-semibold'>
                Выберите{' '}
                {totalPromoProductsQuantity === 0 ? 'первый' : 'следующий'}{' '}
                товар
              </span>
              <button
                className='btn_red h-[60px] sm:h-[50px] max-w-[100px] !max-h-[35px]'
                onClick={handleClickOpenProductsList}
                type='button'
              >
                Выбрать
              </button>
            </>
          ) : null}
        </div>
        <PromoTotal
          promo={promo}
          addProductToCart={addProductToCart}
          isQuantityMax={isQuantityMax}
          priceWithDiscount={priceWithDiscount}
          totalPrice={totalPrice}
        />
      </div>

      <ModalProduct />
      {isProductsListModalOpen && <ModalPromoProductsList promo={promo} />}
    </main>
  );
};

export default PromoPage;
