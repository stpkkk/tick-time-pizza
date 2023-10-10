'use client';

import React from 'react';
import { BackButton, ProductItem } from '@/components';
import { menu, promos } from '@/constants';
import { IProduct } from '@/types';
import { getPizzaOfTheDay } from '@/utils';

type PromoProps = {
  params: {
    id: string;
  };
};

const Promo: React.FC<PromoProps> = ({ params: { id } }) => {
  const pizzas = menu.filter((product) => product.group === 'pizzas');
  const promo = promos.find((p) => p.id === +id);
  const currentDay = getPizzaOfTheDay().dayOfWeek;
  const isPizzaOfTheDay = promo?.title === 'Пицца дня.';
  const pizzaOfTheDay = pizzas.filter(
    (pizza) => pizza.title === getPizzaOfTheDay().pizzaOfTheDay,
  );
  const promoTitle = promo?.title ?? '';

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
      case '4 пиццы по цене 3':
        return fourPizzasPriceThree;
      case 'Пицца дня.':
        return pizzaOfTheDay;
      case 'Маргарита всегда со скидкой!':
        return margarita;
      case 'Три пиццы за 999 рублей':
        return threePizza999;
      case 'Для любителей Пепперони':
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
      <div className='flex flex-col gap-[30px] rounded-2xl bg-white px-[60px] py-[50px] drop-shadow-custom sm:px-4 sm:p-0 max-w-[915px] sm:drop-shadow-none  sm:mx-auto'>
        <div className='grid smMin:grid-cols-1 mdMin:grid-cols-2 lgMin:grid-cols-3 gap-[30px] sm:gap-4'>
          {promoProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promo;
