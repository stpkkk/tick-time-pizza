import { IAdditionalIngredient, IOption, IProduct } from '@/types';

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
    (productPrice || selectedProduct?.prices[0].price || 599) *
      productQuantity +
    additionalIngredientsPrice;
  // const totalProductPrice =
  //   (selectedProduct?.prices && productPrice !== null
  //     ? productPrice
  //     : selectedProduct?.prices[0].price || 579) *
  //     productQuantity +
  //   additionalIngredientsPrice;

  return {
    productPrice,
    additionalIngredientsPrice,
    totalProductPrice,
  };
}

export function calculateCartTotalPrice(cartProducts: IProduct[]) {
  const cartTotalPrice = cartProducts
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
    cartTotalPrice,
  };
}
