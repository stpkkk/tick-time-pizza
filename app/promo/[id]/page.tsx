'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import promoImg from '../../../public/assets/icons/promo.svg';
import {
  BackButton,
  ModalPromoProdutsList,
  PromoProductsList,
  PromoSelectedProductsList,
  PromoTotal,
  PromoTotalHeader,
  PromoTotalPrice,
} from '@/components';
import { Modal } from '@/components/modal';
import { promos } from '@/constants';
import { useLocalStorage } from '@/hooks';
import {
  addToCart,
  resetPromoProductsList,
  setIsProductsListModalOpen,
  setPromoDiscount,
  setSelectedPromo,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
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

const Promo: React.FC<PromoProps> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    isModalOpen,
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

      const updatedPromoProduct = {
        ...selectedProduct,
        uuid,
        productQuantity: 1,
        title: `Акция: ${selectedPromo?.title}`,
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
      selectedProduct,
      setCartProductInLS,
      promoProductsList,
      priceWithDiscount,
      cartProductInLS,
      discount,
      router,
      dispatch,
      selectedPromo,
    ],
  );

  const handleClickOpenProductsList = () => {
    dispatch(setIsProductsListModalOpen(true));
  };

  return (
    <div className='content_container min-h-[calc(100vh-358px)] mt-[90px] sm:mt-[70px] sm:px-0'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <div className='h1'>
          {isPizzaOfTheDay ? promoTitle + ' ' + currentDay : promoTitle}
        </div>
      </div>
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
              <span className='block font-semibold text-sm mb-4'>
                Выберите{' '}
                {totalPromoProductsQuantity === 0 ? 'первый' : 'следующий'}{' '}
                товар
              </span>
              <button
                className='btn_red max-w-[100px] !max-h-[35px]'
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
      <div className='bg-white drop-shadow-custom rounded-t-2xl p-4 pt-0 hidden sm:block w-full fixed bottom-0 left-0'>
        <PromoTotalPrice
          addProductToCart={addProductToCart}
          isQuantityMax={isQuantityMax}
          priceWithDiscount={priceWithDiscount}
          totalPrice={totalPrice}
        />
      </div>
      {isModalOpen && <Modal />}
      {isProductsListModalOpen && <ModalPromoProdutsList promo={promo} />}
    </div>
  );
};

export default Promo;
