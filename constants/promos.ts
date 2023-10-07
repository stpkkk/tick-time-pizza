import birthday from '../public/assets/images/promos/birthday.webp';
import delivery60min from '../public/assets/images/promos/delivery-60-min.webp';
import dinner from '../public/assets/images/promos/dinner.webp';
import pizzaOfTheDay from '../public/assets/images/promos/pizza-of-the-day.webp';
import pizzaThree from '../public/assets/images/promos/pizza-three.webp';
import promoMargarita from '../public/assets/images/promos/promo-margarita.webp';
import promoPepperoni from '../public/assets/images/promos/promo-pepperoni.webp';
import tickets from '../public/assets/images/promos/tickets.webp';
import { Promos } from '@/types';

export const promos: Promos[] = [
  {
    id: 0,
    title: 'Тикеты',
    image: tickets,
  },
  {
    id: 1,
    title: 'Пицца дня.',
    image: pizzaOfTheDay,
  },
  {
    id: 2,
    title: 'Пицца на обед',
    image: dinner,
  },
  {
    id: 3,
    title: '60 минут или пицца бесплатно!',
    image: delivery60min,
  },
  {
    id: 4,
    title: 'Подарок в День Рождения',
    image: birthday,
  },
  {
    id: 5,
    title: 'Маргарита всегда со скидкой!',
    image: promoMargarita,
  },
  {
    id: 6,
    title: 'Три пиццы за 999 рублей',
    image: pizzaThree,
  },
  {
    id: 7,
    title: 'Для любителей Пепперони',
    image: promoPepperoni,
  },
];
