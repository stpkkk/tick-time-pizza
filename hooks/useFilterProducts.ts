import { usePathname } from 'next/navigation';
import { filterByCategoryTitle, filterByGroup } from '../utils';
import { useAppSelector } from '@/redux';
import { CATEGORIES, IProduct } from '@/types';

export const useFilterProducts = (products: IProduct[]): IProduct[] => {
  const pathname = usePathname();
  const { selectedCategory, bookmarks } = useAppSelector(
    (state) => state.menuReducer,
  );

  const filteredProductsByGroup = filterByGroup(pathname, products);
  const vegetarian = filterByCategoryTitle(CATEGORIES.VEGETARIAN, products);
  const forChildren = filterByCategoryTitle(CATEGORIES.FOR_CHILDREN, products);
  const spicy = filterByCategoryTitle(CATEGORIES.SPICY, products);

  switch (selectedCategory.value) {
    case CATEGORIES.BOOKMARKS:
      return bookmarks;
    case CATEGORIES.VEGETARIAN:
      return vegetarian;
    case CATEGORIES.FOR_CHILDREN:
      return forChildren;
    case CATEGORIES.SPICY:
      return spicy;
    default:
      return filteredProductsByGroup;
  }
};
