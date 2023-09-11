import bear from '../public/assets/images/cat-bear.webp';
import fire from '../public/assets/images/cat-fire.webp';
import leaf from '../public/assets/images/cat-leaf.webp';

export const categories = [
  {
    id: 0,
    name: 'Все',
  },
  {
    id: 1,
    name: 'Избранное',
  },
  {
    id: 2,
    name: 'Без Мяса',
    image: leaf,
  },
  {
    id: 3,
    name: 'Подходит для Детей',
    image: bear,
  },
  {
    id: 4,
    name: 'Острая',
    image: fire,
  },
];
