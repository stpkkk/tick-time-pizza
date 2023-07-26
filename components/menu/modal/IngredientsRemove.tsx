"use client"
import React from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setRemovedIngredients } from "@/redux/features/menuSlice"
import { RadioGroupOption } from "@/components/common"
import { RadioGroup } from "@headlessui/react"

import ModalSubTitle from "./ModalSubTitle"
import { Option } from "@/types"

const IngredientsRemove: React.FC = () => {
	const dispatch = useAppDispatch()

	const { clickedMenuItem, removedIngredients } = useAppSelector(
		(state) => state.menuReducer
	)

	const handleIngredientChange = (ingredient: Option) => {
		const updatedIngredients = removedIngredients.includes(ingredient)
			? removedIngredients.filter((item) => item !== ingredient)
			: [...removedIngredients, ingredient]
		dispatch(setRemovedIngredients(updatedIngredients))
	}

	return (
		<div>
			<ModalSubTitle text="Убрать ингредиенты:" />
			<RadioGroup value={null} onChange={handleIngredientChange}>
				<div className="flex flex-row flex-wrap gap-2.5 w-full">
					{clickedMenuItem?.removeIngredients.map((ingredient) => (
						<RadioGroupOption
							key={ingredient.id}
							option={ingredient}
							isChecked={removedIngredients.includes(ingredient)}
							className={`leading-[15px] h-[60px] flex_center whitespace-nowrap px-4 py-2.5`}
							crossed={`${removedIngredients.includes(ingredient) && "line-through"}`}
						/>
					))}
				</div>
			</RadioGroup>
		</div>
	)
}

export default IngredientsRemove;

