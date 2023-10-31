import { useAppSelector } from '@/redux/hooks';
import { Promos, Sizes } from '@/types';

export const getPromoProductSizes = (promoTitle: string) => {
  const { selectedProduct } = useAppSelector((state) => state.menuReducer);

  switch (promoTitle) {
    case Promos.FOUR_BIG_PIZZAS:
      return selectedProduct?.sizes?.filter((size) => size.name === Sizes.BIG);
    case Promos.PEPPERONI:
      return selectedProduct?.sizes?.filter((size) => size.name === Sizes.BIG);
    case Promos.THREE_PIZZAS_999:
      return selectedProduct?.sizes?.filter(
        (size) => size.name === Sizes.SMALL,
      );
    case Promos.DINNER_PIZZA:
      return selectedProduct?.sizes?.filter(
        (size) => size.name === Sizes.MEDIUM,
      );
    default:
      return selectedProduct?.sizes;
  }
};