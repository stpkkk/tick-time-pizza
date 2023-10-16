'use client';

import React from 'react';
import { BackButton, ProductItem, PromoTotal } from '@/components';
import { Modal } from '@/components/modal';
import { menu, promos } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct, Promos } from '@/types';
import { getPizzaOfTheDay } from '@/utils';

type PromoProps = {
  params: {
    id: string;
  };
};

const Promo: React.FC<PromoProps> = ({ params: { id } }) => {
  const { isModalOpen } = useAppSelector((state) => state.menuReducer);
  const pizzas = menu.filter((product) => product.group === 'pizzas');
  const promo = promos.find((p) => p.id === +id);
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isPizzaOfTheDay = promo?.title === 'Пицца дня.';
  const pizzaOfTheDay = pizzas.filter(
    (pizza) => pizza.title === getPizzaOfTheDay().pizzaOfTheDay,
  );
  const promoTitle = promo?.title ?? '';
  const {
    FOUR_BIG_PIZZAS,
    PIZZA_OF_THE_DAY,
    MARGARITA,
    THREE_PIZZAS_999,
    PEPPERONI,
  } = Promos;

  const filterPizzaByName = (name: string) =>
    pizzas.filter((product) => product.title === name);
  const pepperoni = filterPizzaByName('Пицца Пепперони');
  const margarita = filterPizzaByName('Пицца Маргарита');

  const excludePizzaByName = (names: string[]) =>
    pizzas.filter((product) => !names.includes(product.title));
  const fourPizzasPriceThree = excludePizzaByName(['Пицца 4 сыра']);
  const threePizza999 = excludePizzaByName(['Пицца 4 сыра', 'Пицца 4 сезона']);

  const getPromoProducts = (title: string): IProduct[] => {
    switch (title) {
      case FOUR_BIG_PIZZAS:
        return fourPizzasPriceThree;
      case PIZZA_OF_THE_DAY:
        return pizzaOfTheDay;
      case MARGARITA:
        return margarita;
      case THREE_PIZZAS_999:
        return threePizza999;
      case PEPPERONI:
        return pepperoni;
      default:
        return pizzas;
    }
  };

  const promoProducts = getPromoProducts(promoTitle);

  return (
    <div className='content_container min-h-[calc(100vh-358px)] mt-[90px] sm:mt-[70px]'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <div className='h1'>
          {isPizzaOfTheDay ? promoTitle + ' ' + currentDay : promoTitle}
        </div>
      </div>
      <div className='flex justify-between gap-[30px]'>
        <div className='flex flex-col sm:gap-[30px] rounded-2xl bg-white px-[60px] py-[50px] w-full drop-shadow-custom md:px-4  sm:drop-shadow-none sm:mx-auto'>
          <div className='grid justify-items-center smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4 '>
            {promoProducts.map((product) => (
              <ProductItem key={product.id} product={product} promo={promo} />
            ))}
          </div>
        </div>
        <PromoTotal />
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Promo;
