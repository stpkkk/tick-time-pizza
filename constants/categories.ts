import bear from '../public/assets/images/cat-bear.webp';
import fire from '../public/assets/images/cat-fire.webp';
import leaf from '../public/assets/images/cat-leaf.webp';

export const categories = [
  {
    id: 0,
    value: 'Все',
  },
  {
    id: 1,
    value: 'Избранное',
  },
  {
    id: 2,
    value: 'Без Мяса',
    image: leaf,
  },
  {
    id: 3,
    value: 'Подходит для Детей',
    image: bear,
  },
  {
    id: 4,
    value: 'Острая',
    image: fire,
  },
];
