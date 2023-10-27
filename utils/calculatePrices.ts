import {
  IAdditionalIngredient,
  IOption,
  IProduct,
  Prices,
  Promos,
} from '@/types';

export function calculateProductPrices(
  selectedProduct: IProduct | null,
  selectedSize: IOption | null,
  additionalIngredients: IAdditionalIngredient[],
  productQuantity: number,
) {
  const productPrice =
    selectedProduct?.prices?.find((price) => price.id === selectedSize?.id)
      ?.price || null;

  const additionalIngredientsPrice = additionalIngredients.reduce(
    (acc, ing) =>
      acc +
      (ing.prices.find((price) => price.id === selectedSize?.id)?.price ||
        ing.prices.at(0)!.price) *
        (ing.quantity || 1) *
        productQuantity,
    0,
  );

  const totalProductPrice =
    (productPrice ||
      selectedProduct?.prices[0].price ||
      selectedProduct?.totalPrice ||
      599) *
      productQuantity +
    additionalIngredientsPrice;

  return {
    productPrice,
    additionalIngredientsPrice,
    totalProductPrice,
  };
}

export function calculateTotalPrice(products: IProduct[]) {
  const totalPrice = products
    .map((product) =>
      calculateProductPrices(
        product,
        product.selectedSize || null,
        product.additionalIngredients || [],
        product.productQuantity || 1,
      ),
    )
    .reduce((acc, sum) => sum.totalProductPrice + acc, 0);

  return {
    totalPrice,
  };
}

export const getPriceWithDiscount = (
  promoTitle: string,
  fourBigPizzasPrice: number | string,
  pizzaDiscount100: number,
) => {
  switch (promoTitle) {
    case Promos.FOUR_BIG_PIZZAS:
      return fourBigPizzasPrice;
    case Promos.PIZZA_OF_THE_DAY:
      return pizzaDiscount100;
    case Promos.PEPPERONI:
      return Prices.TWO_BIG_PEPPERONIES;
    case Promos.MARGARITA:
      return pizzaDiscount100;
    case Promos.THREE_PIZZAS_999:
      return Prices.THREE_SMALL_PIZZAS;
    case Promos.DINNER_PIZZA:
      return Prices.TWO_MEDIUM_DINNER_PIZZAS;
  }
};
