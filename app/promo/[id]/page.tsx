'use client';

import React from 'react';
import promoImg from '../../../public/assets/icons/promo.svg';
import {
  BackButton,
  ProductItem,
  PromoTotal,
  PromoTotalHeader,
} from '@/components';
import { Modal } from '@/components/modal';
import { promos } from '@/constants';
import { useLocalStorage } from '@/hooks';
import {
  addToCart,
  resetPromoProductsList,
  setPromoDiscount,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Prices, Promos } from '@/types';
import {
  calculateProductPrices,
  calculateTotalPrice,
  generateUUID,
  getPizzaOfTheDay,
  getPriceWithDiscount,
  getPromoProducts,
} from '@/utils';

type PromoProps = {
  params: {
    id: string;
  };
};

const Promo: React.FC<PromoProps> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();
  const {
    isModalOpen,
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
  const promoProducts = getPromoProducts(promoTitle);

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
        additionalIngredients: [],
        discount,
      };

      const updatedCartProduct = [...cartProductInLS, updatedPromoProduct];

      dispatch(addToCart(updatedCartProduct));
      await setCartProductInLS(updatedCartProduct);

      if (priceWithDiscount) {
        dispatch(setPromoDiscount(priceWithDiscount));
      }

      dispatch(resetPromoProductsList());
    },
    [
      selectedProduct,
      setCartProductInLS,
      promoProductsList,
      priceWithDiscount,
      cartProductInLS,
      selectedPromo?.title,
      discount,
      dispatch,
    ],
  );

  return (
    <div className='content_container min-h-[calc(100vh-358px)] mt-[90px] sm:mt-[70px] sm:px-0'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <div className='h1'>
          {isPizzaOfTheDay ? promoTitle + ' ' + currentDay : promoTitle}
        </div>
      </div>
      <div className='hidden sm:flex sm:justify-between bg-yellow px-[30px] py-5'>
        <PromoTotalHeader promo={promo} />
      </div>
      <div className='flex justify-between gap-[30px]'>
        <div className='flex flex-col sm:gap-[30px] rounded-2xl bg-white px-[60px] py-[50px] w-full drop-shadow-custom md:px-4  sm:drop-shadow-none sm:mx-auto'>
          <div className='grid justify-items-center smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4 '>
            {promoProducts.map((product) => (
              <ProductItem key={product.id} product={product} promo={promo} />
            ))}
          </div>
        </div>
        <PromoTotal
          promo={promo}
          addProductToCart={addProductToCart}
          isQuantityMax={isQuantityMax}
          priceWithDiscount={priceWithDiscount}
          totalPrice={totalPrice}
        />
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Promo;
