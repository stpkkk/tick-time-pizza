import React, { useCallback } from 'react';
import Counter from './Counter';
import { useLocalStorage } from '@/hooks';
import {
  addToCart,
  addToPromoProductsList,
  decrementProductQuantity,
  incrementProductQuantity,
  toggleModal,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { calculateProductPrices, generateUUID } from '@/utils';

const ModalTotal: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    selectedProduct,
    additionalIngredients,
    selectedSize,
    removedIngredients,
    selectedDough,
    productQuantity,
    selectedPromo,
    promoProductsList,
    totalPromoProductsQuantity,
  } = useAppSelector((state) => state.menuReducer);

  const { totalProductPrice } = calculateProductPrices(
    selectedProduct,
    selectedSize,
    additionalIngredients,
    productQuantity,
  );

  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  const addProductToCart = useCallback(async () => {
    const uuid = generateUUID();

    // Create an updated product object
    const updatedSelectedProduct = {
      ...selectedProduct,
      productQuantity,
      selectedSize,
      selectedDough,
      additionalIngredients,
      removedIngredients,
      totalPrice: totalProductPrice,
      uuid,
    };

    // Update the cart products and promo products
    const updatedCartProduct = [...cartProductInLS, updatedSelectedProduct];
    const updatedPromoProducts = [...promoProductsList, updatedSelectedProduct];

    if (selectedPromo) {
      dispatch(addToPromoProductsList(updatedPromoProducts));
    } else {
      dispatch(addToCart(updatedCartProduct));
      await setCartProductInLS(updatedCartProduct);
    }

    dispatch(toggleModal(false));
  }, [
    selectedProduct,
    selectedSize,
    selectedDough,
    additionalIngredients,
    removedIngredients,
    productQuantity,
    totalProductPrice,
    selectedPromo,
    promoProductsList,
    cartProductInLS,
    setCartProductInLS,
    dispatch,
  ]);

  const handleIncrement = () => {
    if (
      productQuantity < (selectedPromo?.maxValue || 99) &&
      (selectedPromo?.maxValue || 99) - productQuantity >
        totalPromoProductsQuantity
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
      <div className='flex_between w-full sm:flex-row-reverse sm:px-4'>
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
          <span className='text-xl font-semibold sm:text-base'>
            {totalProductPrice} ₽
          </span>
        </div>
      </div>
      <button className='btn_red' type='button' onClick={addProductToCart}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ModalTotal;
