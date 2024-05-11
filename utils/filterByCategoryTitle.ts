import { IProduct } from '@/types';

export function filterByCategoryTitle(title: string, products: IProduct[]) {
  return products.filter(
    (product) =>
      product.categories?.some((category) => category.title === title),
  );
}
