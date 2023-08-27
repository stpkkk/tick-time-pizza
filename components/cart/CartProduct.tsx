import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Counter } from "../menu";
import { calculateProductPrices } from "@/utils";
import { IProduct } from "@/types";

interface CartProductProps {
  product: IProduct;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  const totalProductPrice = calculateProductPrices(
    product,
    product.selectedSize || null,
    product.additionalIngredients,
    product.productAmount || 1
  ).totalProductPrice;

  return (
    <li className="flex_center flex-none md:gap-4 gap-5" key={product.id}>
      <Image
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="aspect-square w-full h-full max-w-[76px] max-h-[76px]"
      />
      <div className="flex sm:flex-col flex-row products-start sm:gap-3.5 gap-4 w-full pt-3.5 min-w-[1px]">
        <div className="mr-auto min-w-[1px] max-w-full">
          <span className="sm:text-xs sm:leading-[15px] text-base leading-5 block break-words font-semibold">
            {product.title}
          </span>
          <p className="sm:text-[8px] text-xs leading-[15px] mt-[5px] break-words font-normal">
            {product.selectedSize?.name},{product.selectedDough?.name}
          </p>
          {product.removedIngredients &&
            product.removedIngredients.length > 0 && (
              <p className="sm:text-[8px] text-xs leading-[15px] mt-[5px] break-words font-normal">
                Убрать:&nbsp;
                {product.removedIngredients?.map(ing => (
                  <span key={ing.id}>{ing.name},&nbsp;</span>
                ))}
              </p>
            )}
          {product.additionalIngredients.length > 0 && (
            <p className="sm:text-[8px] text-xs leading-[15px] mt-[5px] break-words font-normal">
              Добавить:&nbsp;
              {product.additionalIngredients.map(ing => (
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
          minValue={1}
          value={product.productAmount || 1}
          initialValue={product.productAmount || 1}
          handleDecrement={onDecrement}
          handleIncrement={onIncrement}
        />
        <p className="sm:text-xs sm:leading-[15px] text-base leading-5 whitespace-nowrap font-semibold w-20 text-center">
          {totalProductPrice} ₽
        </p>
        <RiDeleteBin6Line
          size={20}
          onClick={onRemove}
          className="text-grayDark cursor-pointer hover:text-primary"
        />
      </div>
    </li>
  );
};

export default CartProduct;
