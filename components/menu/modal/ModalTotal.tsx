import React from "react";
import {
  decrementProductAmount,
  incrementProductAmount,
} from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Counter from "./Counter";

const ModalTotal: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    selectedProduct,
    productAmount,
    additionalIngredients,
    selectedSize,
  } = useAppSelector(state => state.menuReducer);

  const itemPrice = selectedProduct?.prices.find(
    item => item.id === selectedSize?.id
  )?.price;

  const additionalIngredientsPrice = additionalIngredients.reduce(
    (acc, ing) =>
      acc +
      (ing.prices.find(price => price.id === selectedSize?.id)?.price || 100) *
        (ing.amount || 1) *
        productAmount,
    0
  );

  const totalPrice =
    selectedProduct?.prices &&
    (itemPrice || 579) * productAmount + additionalIngredientsPrice;

  const handleIncrement = () => {
    dispatch(incrementProductAmount(selectedProduct?.id || 0));
  };

  const handleDecrement = () => {
    dispatch(decrementProductAmount(selectedProduct?.id || 0));
  };

  return (
    <div className="flex_center flex-col gap-[30px]">
      <div className="flex_between w-full sm:flex-row-reverse sm:px-4">
        <div className="flex_between text-base w-full max-w-[128px] sm:max-w-[96px]">
          <Counter
            initialValue={1}
            value={productAmount}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
        <div>
          <span className="text-xl font-semibold sm:text-base">
            {totalPrice} ₽
          </span>
        </div>
      </div>
      <button className="btn_red sm:max-w-full">Добавить в корзину</button>
    </div>
  );
};

export default ModalTotal;
