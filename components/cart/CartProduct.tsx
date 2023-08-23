import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Counter } from "../menu";
import { calculatePrices } from "@/utils";
import { IProduct } from "@/types";

interface CartProductProps {
  item: IProduct;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  const totalPrice = calculatePrices(
    item,
    item.selectedSize || null,
    item.additionalIngredients,
    item.productAmount || 1
  ).totalPrice;

  return (
    <li className="flex_center flex-none md:gap-4 gap-5" key={item.id}>
      <Image
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="aspect-square w-full h-full max-w-[76px] max-h-[76px]"
      />
      <div className="flex sm:flex-col flex-row items-start sm:gap-3.5 gap-4 w-full pt-3.5 min-w-[1px]">
        <div className="mr-auto min-w-[1px] max-w-full">
          <span className="sm:text-xs sm:leading-[15px] text-base leading-5 block break-words font-semibold">
            {item.title}
          </span>
          <p className="sm:text-[8px] text-xs leading-[15px] mt-[5px] break-words font-normal">
            {item.selectedSize?.name},{item.selectedDough?.name}
          </p>
          {item.removedIngredients && item.removedIngredients.length > 0 && (
            <p className="sm:text-[8px] text-xs leading-[15px] mt-[5px] break-words font-normal">
              Убрать:&nbsp;
              {item.removedIngredients?.map(ing => (
                <span key={ing.id}>{ing.name},&nbsp;</span>
              ))}
            </p>
          )}
          {item.additionalIngredients.length > 0 && (
            <p className="sm:text-[8px] text-xs leading-[15px] mt-[5px] break-words font-normal">
              Добавить:&nbsp;
              {item.additionalIngredients.map(ing => (
                <span key={ing.id}>
                  {ing.name}&nbsp;({ing.amount}шт.),&nbsp;
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
      <div className="flex_center gap-5">
        <Counter
          value={item.productAmount || 1}
          initialValue={item.productAmount || 1}
          handleDecrement={onDecrement}
          handleIncrement={onIncrement}
        />
        <p className="sm:text-xs sm:leading-[15px] text-base leading-5 whitespace-nowrap font-semibold w-20 text-center">
          {totalPrice} ₽
        </p>
        <RiDeleteBin6Line
          size={20}
          onClick={onRemove}
          className="text-grayDark"
        />
      </div>
    </li>
  );
};

export default CartProduct;
