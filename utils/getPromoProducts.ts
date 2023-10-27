import { getPizzaOfTheDay } from './getPizzaOfTheDay';
import { menu } from '@/constants';
import { IProduct, Promos } from '@/types';

const {
  FOUR_BIG_PIZZAS,
  PIZZA_OF_THE_DAY,
  MARGARITA,
  THREE_PIZZAS_999,
  PEPPERONI,
} = Promos;

const pizzas = menu.filter((product) => product.group === 'pizzas');

const pizzaOfTheDay = pizzas.filter(
  (pizza) => pizza.title === getPizzaOfTheDay().pizzaOfTheDay,
);

const filterPizzaByName = (name: string) =>
  pizzas.filter((product) => product.title === name);
const pepperoni = filterPizzaByName('Пицца Пепперони');
const margarita = filterPizzaByName('Пицца Маргарита');

const excludePizzaByName = (names: string[]) =>
  pizzas.filter((product) => !names.includes(product.title));
const fourPizzasPriceThree = excludePizzaByName(['Пицца 4 сыра']);
const threePizza999 = excludePizzaByName(['Пицца 4 сыра', 'Пицца 4 сезона']);

export const getPromoProducts = (title: string): IProduct[] => {
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
