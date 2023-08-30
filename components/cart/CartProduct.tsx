import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Counter } from "../menu";
import { calculateProductPrices } from "@/utils";
import { IAdditionalIngredient, IOption, IProduct } from "@/types";

interface CartProductProps {
  product: IProduct;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const renderIngredientsToRemove = (ingredients: IOption[]) => {
  return (
    <p className="sm:text-[10px] text-xs leading-[15px] sm:leading-[0.75rem] mt-[5px] break-words font-normal">
      Убрать:&nbsp;
      {ingredients.map(ing => (
        <span key={ing.id}>{ing.name},&nbsp;</span>
      ))}
    </p>
  );
};

const renderIngredientsToAdd = (ingredients: IAdditionalIngredient[]) => {
  return (
    <p className="sm:text-[10px] text-xs leading-[15px] mt-[5px] break-words font-normal">
      Добавить:&nbsp;
      {ingredients.map(ing => (
        <span key={ing.id}>
          {ing.name}&nbsp;({ing.amount}шт.),&nbsp;
        </span>
      ))}
    </p>
  );
};

const CartProduct: React.FC<CartProductProps> = ({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  const {
    image,
    title,
    selectedSize,
    selectedDough,
    removedIngredients,
    additionalIngredients,
    productAmount,
    id,
  } = product;

  const { totalProductPrice } = calculateProductPrices(
    product,
    selectedSize || null,
    additionalIngredients,
    productAmount || 1
  );

  return (
    <li className="flex_start md:gap-4 gap-5 flex-none" key={id}>
      <Image
        src={image}
        alt={title}
        loading="eager"
        className="aspect-square w-full h-full max-w-[76px] max-h-[76px]"
      />
      <div className="flex pt-4 sm:pt-0 md:flex-wrap md:flex-col flex-row sm:items-start sm:gap-3.5 gap-4 min-w-[1px] w-full">
        <div className="mr-auto min-w-[1px] max-w-full">
          <span className="sm:text-xs leading-[15px] sm:leading-[0.75rem] text-base  font-semibold">
            {title}
          </span>
          <p className="sm:text-[10px] text-xs leading-[15px] sm:leading-[0.75rem] mt-[5px] break-words font-normal">
            {selectedSize?.name},&nbsp;{selectedDough?.name}
          </p>
          <p className="break-words">
            {removedIngredients &&
              removedIngredients.length > 0 &&
              renderIngredientsToRemove(removedIngredients)}
          </p>
          <p className="break-words">
            {additionalIngredients.length > 0 &&
              renderIngredientsToAdd(additionalIngredients)}
          </p>
        </div>
        <div className="flex_start sm:flex_center flex-row gap-5 sm:gap-2 leading-[20px]">
          <Counter
            minValue={1}
            value={productAmount || 1}
            initialValue={productAmount || 1}
            handleDecrement={onDecrement}
            handleIncrement={onIncrement}
          />
          <p className="sm:text-xs sm:leading-[20px] text-base leading-5 whitespace-nowrap font-semibold">
            {totalProductPrice} ₽
          </p>
        </div>
      </div>
      <button className="flex_start gap-5 pt-4 sm:pt-0" type="button">
        <RiDeleteBin6Line
          size={20}
          onClick={onRemove}
          className="text-grayDark cursor-pointer hover:text-primary"
        />
      </button>
    </li>
  );
};

export default CartProduct;
