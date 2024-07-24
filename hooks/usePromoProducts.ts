'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { getPizzaOfTheDay } from '../utils/getPizzaOfTheDay';
import { useLocalStorage } from './useLocalStorage';
import { useProducts } from './useProducts';
import { promos } from '@/constants';
import promoImg from '@/public/assets/icons/promo.svg';
import {
  addToCart,
  resetPromoProducts,
  setPromoDiscount,
  setSelectedPromo,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { IProduct, Prices, Promos } from '@/types';
import {
  calculateProductPrices,
  calculateTotalPrice,
  generateUUID,
  getPriceWithDiscount,
} from '@/utils';

const {
  FOUR_BIG_PIZZAS,
  PIZZA_OF_THE_DAY,
  MARGARITA,
  THREE_PIZZAS_999,
  PEPPERONI,
} = Promos;

export const usePromoProducts = (id = '') => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { products, isLoading } = useProducts();

  const {
    selectedPromoProducts,
    selectedProduct,
    selectedSize,
    productQuantity,
    totalPromoProducts,
  } = useAppSelector((state) => state.menuReducer);
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  const promo = promos.find((p) => p.id === +id);
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isQuantityMax = totalPromoProducts === promo?.maxValue;
  const pizzas = products.filter((product) => product.group === 'pizzas');

  const pizzaOfTheDay = pizzas.filter(
    (pizza) => pizza.title === getPizzaOfTheDay().pizzaOfTheDay,
  );

  const isPizzaOfTheDay = promo?.title === Promos.PIZZA_OF_THE_DAY;

  const filterPizzaByName = (name: string) =>
    pizzas.filter((product) => product.title === name);
  const pepperoni = filterPizzaByName('Пицца Пепперони');
  const margarita = filterPizzaByName('Пицца Маргарита');

  const excludePizzaByName = (names: string[]) =>
    pizzas.filter((product) => !names.includes(product.title));
  const fourPizzasPriceThree = excludePizzaByName(['Пицца 4 сыра']);
  const threePizza999 = excludePizzaByName(['Пицца 4 сыра', 'Пицца 4 сезона']);
  const { totalPrice } = calculateTotalPrice(selectedPromoProducts);
  const { productPrice } = calculateProductPrices(
    selectedProduct,
    selectedSize,
    [],
    productQuantity,
  );
  const fourBigPizzasPrice =
    (productPrice && totalPrice - productPrice) ?? '-' + Prices.BIG;
  const pizzaDiscount100 = (productPrice && totalPrice - 100) ?? -100;

  const priceWithDiscount = getPriceWithDiscount(
    promo?.title || '',
    fourBigPizzasPrice,
    pizzaDiscount100,
  );
  const discount =
    typeof priceWithDiscount === 'number' ? totalPrice - priceWithDiscount : 0;

  const addPromoToCart = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const uuid = generateUUID();

      const updatedPromoProduct = {
        ...selectedProduct,
        uuid,
        productQuantity: 1,
        title: promo?.title || '',
        image: promoImg,
        totalPrice: priceWithDiscount,
        selectedPromoProducts,
        selectedIngredients: [],
        discount,
      };

      const updatedCartProduct = [...cartProductInLS, updatedPromoProduct];

      dispatch(addToCart(updatedCartProduct));
      await setCartProductInLS(updatedCartProduct);

      if (priceWithDiscount) {
        dispatch(setPromoDiscount(priceWithDiscount));
      }

      dispatch(resetPromoProducts());
      dispatch(setSelectedPromo(null));
      router.push('/promo');
    },
    [
      selectedProduct,
      promo?.title,
      priceWithDiscount,
      selectedPromoProducts,
      discount,
      cartProductInLS,
      dispatch,
      setCartProductInLS,
      router,
    ],
  );

  let promoProducts: IProduct[];
  switch (promo?.title) {
    case FOUR_BIG_PIZZAS:
      promoProducts = fourPizzasPriceThree;
      break;
    case PIZZA_OF_THE_DAY:
      promoProducts = pizzaOfTheDay;
      break;
    case MARGARITA:
      promoProducts = margarita;
      break;
    case THREE_PIZZAS_999:
      promoProducts = threePizza999;
      break;
    case PEPPERONI:
      promoProducts = pepperoni;
      break;
    default:
      promoProducts = pizzas;
  }

  return {
    addPromoToCart,
    promo,
    isQuantityMax,
    priceWithDiscount,
    totalPrice,
    isPizzaOfTheDay,
    promoProducts,
    currentDay,
    isLoading,
  };
};
