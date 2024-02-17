import { getGroupProducts } from '../utils/getGroupProducts';
import { menu } from '@/constants';
import { CATEGORIES, IProduct } from '@/types';

function filterByCategoryTitle(categoryTitle: string) {
  return menu.filter(
    (product) =>
      product.categories?.some((category) => category.title === categoryTitle),
  );
}

type GetCategoryProductsFunction = (
  category: string | number,
  bookmarks: IProduct[],
  pathname: string,
) => IProduct[];

const getCategoryProducts: GetCategoryProductsFunction = (
  category,
  bookmarks,
  pathname,
) => {
  const productsGroup = getGroupProducts(pathname);

  switch (category) {
    case CATEGORIES.BOOKMARKS:
      return bookmarks;
    case CATEGORIES.VEGETARIAN:
      return filterByCategoryTitle(CATEGORIES.VEGETARIAN);
    case CATEGORIES.FOR_CHILDREN:
      return filterByCategoryTitle(CATEGORIES.FOR_CHILDREN);
    case CATEGORIES.SPICY:
      return filterByCategoryTitle(CATEGORIES.SPICY);
    default:
      return productsGroup;
  }
};

export default getCategoryProducts;
