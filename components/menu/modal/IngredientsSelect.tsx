"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import IngredientsSelectItem from "./IngredientsSelectItem";
import { setAllIngredients } from "@/redux/features/menuSlice";
import { BsPlusSquare } from "react-icons/bs";
import ModalSubTitle from "./ModalSubTitle";

const IngredientsSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const { clickedMenuItem, isAllIngredients } = useAppSelector(
    state => state.menuReducer
  );

  const sliceTo = isAllIngredients
    ? clickedMenuItem?.additionalIngredients.length
    : 5;

  const showMore = sliceTo !== undefined && sliceTo <= 5;

  return (
    <div>
      <ModalSubTitle text="Добавить ингредиенты:" />
      <ul className="flex flex-col flex-wrap gap-2.5">
        {clickedMenuItem?.additionalIngredients
          .slice(0, sliceTo)
          .map(ingredient => (
            <IngredientsSelectItem {...ingredient} key={ingredient.id} />
          ))}
      </ul>
      {showMore ? (
        <button
          type="button"
          onClick={() => dispatch(setAllIngredients())}
          className="flex_between gap-3 font-semibold text-sm text-grayDark hover:text-primary mx-auto w-auto mt-2.5"
        >
          <BsPlusSquare />
          <span>Показать ещё</span>
        </button>
      ) : null}
    </div>
  );
};

export default IngredientsSelect;
