import { IProduct, Promos, Sizes } from '@/types';

export const getPromoProductSizes = (
  promoTitle: string,
  selectedProduct: IProduct | null,
) => {
  if (!selectedProduct) {
    return null;
  }

  switch (promoTitle) {
    case Promos.FOUR_BIG_PIZZAS:
      return selectedProduct.sizes?.filter((size) => size.value === Sizes.BIG);
    case Promos.PEPPERONI:
      return selectedProduct.sizes?.filter((size) => size.value === Sizes.BIG);
    case Promos.THREE_PIZZAS_999:
      return selectedProduct.sizes?.filter((size) => size.value === Sizes.SMALL);
    case Promos.DINNER_PIZZA:
      return selectedProduct.sizes?.filter(
        (size) => size.value === Sizes.MEDIUM,
      );
    default:
      return selectedProduct.sizes;
  }
};
