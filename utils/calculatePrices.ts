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
  selectedIngredients: IAdditionalIngredient[],
  productQuantity: number,
) {
  const productPrice =
    selectedProduct?.prices?.find((price) => price.id === selectedSize?.id)
      ?.value || null;

  const selectedIngredientsPrice = selectedIngredients.reduce(
    (acc, ing) =>
      acc +
      (ing.prices.find((price) => price.id === selectedSize?.id)?.value ||
        ing.prices.at(0)!.value) *
        (ing.quantity || 1) *
        productQuantity,
    0,
  );

  const totalProductPrice =
    (productPrice ||
      selectedProduct?.totalPrice ||
      selectedProduct?.prices[0].value ||
      599) *
      productQuantity +
    selectedIngredientsPrice;

  return {
    productPrice,
    selectedIngredientsPrice,
    totalProductPrice,
  };
}

export function calculateTotalPrice(products: IProduct[]) {
  const totalPrice = products
    .map((product) =>
      calculateProductPrices(
        product,
        product.selectedSize || null,
        product.selectedIngredients || [],
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
