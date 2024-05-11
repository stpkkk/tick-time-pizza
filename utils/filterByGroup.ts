import { IProduct } from '@/types';

export const filterByGroup = (
  pathname: string,
  products: IProduct[],
): IProduct[] => {
  const pizzas = products.filter((item) => item.group === 'pizzas');
  const snacks = products.filter((item) => item.group === 'snacks');
  const drinks = products.filter((item) => item.group === 'drinks');
  const deserts = products.filter((item) => item.group === 'desserts');

  switch (pathname) {
    case '/snacks':
      return snacks;
    case '/drinks':
      return drinks;
    case '/desserts':
      return deserts;
    default:
      return pizzas;
  }
};
