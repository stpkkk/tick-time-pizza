import slide1 from '../public/assets/images/slider/slide-1.webp';
import slide2 from '../public/assets/images/slider/slide-2.webp';
import slide3 from '../public/assets/images/slider/slide-3.webp';
import slide5 from '../public/assets/images/slider/slide-5.webp';
import slide6 from '../public/assets/images/slider/slide-6.webp';
import americana from '../public/assets/images/slider/slide-americana.webp';
import bakedPork from '../public/assets/images/slider/slide-baked-pork-pizza.webp';
import carbonara from '../public/assets/images/slider/slide-carbonara.webp';
import cheesePizza from '../public/assets/images/slider/slide-cheese-pizza.webp';
import chickenSausages from '../public/assets/images/slider/slide-chicken-sausages.webp';
import hunter from '../public/assets/images/slider/slide-hunter-pizza.webp';
import pepperoni from '../public/assets/images/slider/slide-pepperoni-pizza.webp';
import { Slide } from '@/types';
import { getPizzaOfTheDay } from '@/utils';

const { dayIndex } = getPizzaOfTheDay();

export const pizzaOfTheDaySlides: Slide[] = [
  { id: 0, image: bakedPork, title: 'Пицца Запечённая Буженина' },
  { id: 1, image: carbonara, title: 'Пицца Карбонара' },
  { id: 2, image: pepperoni, title: 'Пицца Пепперони' },
  { id: 3, image: chickenSausages, title: 'Пицца Курица и Колбаски' },
  { id: 4, image: cheesePizza, title: 'Пицца Сырная' },
  { id: 5, image: americana, title: 'Пицца Американа' },
  { id: 6, image: hunter.src, title: 'Пицца Охотничья' },
];

const slideOfTheDay = pizzaOfTheDaySlides[dayIndex];

export const slides: Slide[] = [
  { id: 0, image: slide1, title: 'Сырные палочки Блю Чиз' },
  { id: 1, image: slide2, title: 'Салат Овощной с яйцом' },
  { id: 2, image: slide3, title: 'Пломбир Ванильный' },
  { id: 3, image: slide5, title: 'Сладкие палочки' },
  { id: 4, image: slide6, title: 'Картофель чикен фри' },
  { id: 5, image: slideOfTheDay?.image, title: slideOfTheDay?.title },
];
