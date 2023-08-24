import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Counter from "./Counter";
import { useLocalStorage } from "@/hooks";
import { calculatePrices } from "@/utils";
import {
  decrementProductAmount,
  incrementProductAmount,
} from "@/redux/features/menuSlice";

const ModalTotal: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    selectedProduct,
    additionalIngredients,
    selectedSize,
    removedIngredients,
    selectedDough,
    productAmount,
  } = useAppSelector(state => state.menuReducer);

  const [cartProduct, setCartProduct] = useLocalStorage([], "cart");

  const price = calculatePrices(
    selectedProduct,
    selectedSize,
    additionalIngredients,
    productAmount
  ).totalPrice;

  const addToCart = () => {
    const updatedSelectedProduct = {
      ...selectedProduct,
      productAmount,
      selectedSize,
      selectedDough,
      additionalIngredients,
      removedIngredients,
    };

    setCartProduct([...cartProduct, updatedSelectedProduct]);
  };

  const handleIncrement = () => {
    dispatch(incrementProductAmount());
  };

  const handleDecrement = () => {
    if (productAmount > 1) dispatch(decrementProductAmount());
  };

  return (
    <div className="flex_center flex-col gap-[30px]">
      <div className="flex_between w-full sm:flex-row-reverse sm:px-4">
        <div className="flex_between text-base w-full max-w-[128px] sm:max-w-[96px]">
          <Counter
            minValue={1}
            initialValue={1}
            value={productAmount}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
        <div>
          <span className="text-xl font-semibold sm:text-base">{price} ₽</span>
        </div>
      </div>
      <button className="btn_red sm:max-w-full" onClick={addToCart}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ModalTotal;
