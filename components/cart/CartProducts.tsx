"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  decrementProductAmount,
  incrementProductAmount,
} from "@/redux/features/menuSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

import Image from "next/image";
import { Counter } from "../menu";
import { IProduct } from "@/types";

const CartProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const productAmount = useAppSelector(
    state => state.menuReducer.productAmount
  );
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems) as IProduct[];
      setItems(parsedItems);
    }
  }, []);

  const removeItem = (itemId: number) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleIncrement = (itemId: number) => {
    dispatch(incrementProductAmount(itemId || 0));
  };

  const handleDecrement = (itemId: number) => {
    dispatch(decrementProductAmount(itemId || 0));
  };
  return (
    <div className="flex sm:flex-col flex-row gap-[30px] w-full">
      <div className="w-full max-w-[calc(100%-420px)]">
        <ul className="sm:py-8 sm:px-4 py-[50px] px-[60px] rounded-2xl drop-shadow-custom bg-white flex flex-col gap-[30px]">
          {items.map(item => (
            <li
              className="flex items-start flex-none md:gap-4 gap-5"
              key={item.id}
            >
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
                  {item.removedIngredients &&
                    item.removedIngredients.length > 0 && (
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
                <div className="flex_center gap-5">
                  <Counter
                    value={productAmount}
                    initialValue={productAmount}
                    handleDecrement={() => handleDecrement(item.id)}
                    handleIncrement={() => handleIncrement(item.id)}
                  />
                  <p className="sm:text-xs sm:leading-[15px] text-base leading-5 whitespace-nowrap font-semibold w-20 text-center">
                    399 ₽
                  </p>
                  <RiDeleteBin6Line
                    size={20}
                    onClick={() => removeItem(item.id)}
                    className="text-grayDark"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartProducts;
