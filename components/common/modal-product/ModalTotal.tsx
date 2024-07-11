import React from 'react';
import { Counter } from '..';
import { useLocalStorage } from '@/hooks';
import {
  addToCart,
  addToPromoProducts,
  decrementProductQuantity,
  incrementProductQuantity,
  setModalProductOpen,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { calculateProductPrices, generateUUID } from '@/utils';

const ModalTotal: React.FC = () => {
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const dispatch = useAppDispatch();
  const {
    selectedProduct,
    selectedIngredients,
    selectedSize,
    removedIngredients,
    selectedDough,
    productQuantity,
    selectedPromo,
    selectedPromoProducts,
    totalPromoProducts,
  } = useAppSelector((state) => state.menuReducer);
  const { totalProductPrice } = calculateProductPrices(
    selectedProduct,
    selectedSize,
    selectedIngredients,
    productQuantity,
  );

  const addProductToCart = React.useCallback(async () => {
    const uuid = generateUUID();

    // Create an updated product object
    const updatedSelectedProduct = {
      ...selectedProduct,
      productQuantity,
      selectedSize,
      selectedDough,
      selectedIngredients,
      removedIngredients,
      totalPrice: totalProductPrice,
      uuid,
    };

    // Update the cart products and promo products
    const updatedCartProduct = [...cartProductInLS, updatedSelectedProduct];
    const updatedPromoProducts = [
      ...selectedPromoProducts,
      updatedSelectedProduct,
    ];

    if (selectedPromo) {
      dispatch(addToPromoProducts(updatedPromoProducts));
    } else {
      await setCartProductInLS(updatedCartProduct);
      dispatch(addToCart(updatedCartProduct));
    }

    dispatch(setModalProductOpen(false));
  }, [
    selectedProduct,
    productQuantity,
    selectedSize,
    selectedDough,
    selectedIngredients,
    removedIngredients,
    totalProductPrice,
    cartProductInLS,
    selectedPromoProducts,
    selectedPromo,
    dispatch,
    setCartProductInLS,
  ]);

  const handleIncrement = () => {
    if (
      productQuantity < (selectedPromo?.maxValue || 99) &&
      (selectedPromo?.maxValue || 99) - productQuantity > totalPromoProducts
    ) {
      dispatch(incrementProductQuantity());
    }
  };

  const handleDecrement = () => {
    if (productQuantity > 1) {
      dispatch(decrementProductQuantity());
    }
  };

  return (
    <div className='flex_center flex-col gap-[30px]'>
      <div className='flex_between sm:flex-row-reverse sm:px-4 w-full'>
        <div className='flex_between w-full max-w-[128px] text-base sm:max-w-[96px]'>
          <Counter
            minValue={1}
            maxValue={selectedPromo?.maxValue || 99}
            initialValue={1}
            value={productQuantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
        <div>
          <span className='sm:text-base text-xl font-semibold'>
            {totalProductPrice} ₽
          </span>
        </div>
      </div>
      <button
        className='btn_red min-h-[60px] sm:min-h-[45px] uppercase'
        type='button'
        onClick={addProductToCart}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default ModalTotal;
