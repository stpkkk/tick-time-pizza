import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addToCart,
  decrementProductAmount,
  incrementProductAmount,
  toggleModal,
} from '@/redux/features/menuSlice';

import Counter from './Counter';
import { useLocalStorage } from '@/hooks';
import { calculateProductPrices } from '@/utils';

const ModalTotal: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    selectedProduct,
    additionalIngredients,
    selectedSize,
    removedIngredients,
    selectedDough,
    productAmount,
  } = useAppSelector((state) => state.menuReducer);

  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  const addProductToCart = async () => {
    const updatedSelectedProduct = {
      ...selectedProduct,
      productAmount,
      selectedSize,
      selectedDough,
      additionalIngredients,
      removedIngredients,
      uuid: crypto.randomUUID(),
    };

    const updatedCartProduct = [...cartProductInLS, updatedSelectedProduct];

    dispatch(addToCart(updatedCartProduct));
    await setCartProductInLS(updatedCartProduct);
    dispatch(toggleModal(false));
  };

  const totalProductPrice = calculateProductPrices(
    selectedProduct,
    selectedSize,
    additionalIngredients,
    productAmount,
  ).totalProductPrice;

  const handleIncrement = () => {
    dispatch(incrementProductAmount());
  };

  const handleDecrement = () => {
    if (productAmount > 1) dispatch(decrementProductAmount());
  };

  return (
    <div className='flex_center flex-col gap-[30px]'>
      <div className='flex_between w-full sm:flex-row-reverse sm:px-4'>
        <div className='flex_between text-base w-full max-w-[128px] sm:max-w-[96px]'>
          <Counter
            minValue={1}
            initialValue={1}
            value={productAmount}
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
      <button className='btn_red' type='submit' onSubmit={addProductToCart}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ModalTotal;
