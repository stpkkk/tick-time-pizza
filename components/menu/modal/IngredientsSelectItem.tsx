import React from "react";
import Image from "next/image";

import Counter from "./Counter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { decrementIngredientAmount, incrementIngredientAmount } from '@/redux/features/menuSlice'
import { additionalIngredientsTypes } from '@/types'

type IngredientsSelectItemProps = {
	ingredient: additionalIngredientsTypes
}


const IngredientsSelectItem: React.FC<IngredientsSelectItemProps> = ({ ingredient }) => {
	const dispatch = useAppDispatch()
	const ingredientAmount = useAppSelector((state) => state.menuReducer.additionalIngredients[ingredient.id])

	const handleDecrement = (id: number) => {
		if (ingredientAmount > 0) {
			dispatch(decrementIngredientAmount({ itemId: id }))
		}
	}

	const handleIncrement = (id: number) => {
		dispatch(incrementIngredientAmount({ itemId: id }))
	};

  return (
		<li
			key={ingredient.id}
			className={`flex justify-between flex-row px-4 py-2.5 rounded-2xl ${ingredientAmount > 0 ? "bg-yellow" : "bg-grayLight"}`}
    >
      <div className="flex flex-grow flex-auto basis-[calc(100%-7rem)] items-center flex-row gap-5">
        <div className="w-27 h-27">
					<Image src={ingredient.image} alt={ingredient.name} width={27} height={27} />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="md:text-xs md:leading-[15px] text-sm leading-[17px] font-bold break-words">
						{ingredient.name}
          </span>
          <span className="md:text-xs md:leading-[15px] text-sm leading-[17px] font-normal whitespace-nowrap">
						{ingredient.weight} г&nbsp;{ingredient.price} ₽
          </span>
        </div>
        <div className="gap-2 flex justify-between flex-nowrap items-center text-xs sm:text-base ml-auto">
					<Counter
						handleIncrement={() => handleIncrement(ingredient.id)}
						handleDecrement={() => handleDecrement(ingredient.id)}
						initialValue={0}
						value={ingredientAmount}
						id={ingredient.id}
					/>
        </div>
      </div>
    </li>
  );
};

export default IngredientsSelectItem;
