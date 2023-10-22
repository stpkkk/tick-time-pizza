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
    (productPrice || selectedProduct?.totalProductPrice || 599) *
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
