import { menu } from '@/constants';
import { IProduct } from '@/types';

const pizzasMenu = menu.filter((item) => item.group === 'pizzas');
const snacksMenu = menu.filter((item) => item.group === 'snacks');
const drinksMenu = menu.filter((item) => item.group === 'drinks');
const desertsMenu = menu.filter((item) => item.group === 'desserts');

export const getGroupProducts = (pathname: string): IProduct[] => {
  switch (pathname) {
    case '/snacks':
      return snacksMenu;
    case '/drinks':
      return drinksMenu;
    case '/desserts':
      return desertsMenu;
    default:
      return pizzasMenu;
  }
};
