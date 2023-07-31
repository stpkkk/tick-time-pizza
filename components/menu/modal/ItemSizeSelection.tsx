"use client";
import React from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setSelectedDough,
  setSelectedSize,
  initializeDefaultValues,
} from "@/redux/features/menuSlice";
import { RadioGroup } from "@headlessui/react"
import { RadioGroupOption } from "@/components/common";
import { Option } from "@/types";

const ItemSizeSelection: React.FC = () => {
  const { clickedMenuItem, selectedSize, selectedDough } = useAppSelector(
		(state) => state.menuReducer
	);
	const dispatch = useAppDispatch()
	const thinDough = "Тонкое"
	const smallSize = 23;

	const getWeightBySize = () => {
		return clickedMenuItem?.weightItem.find((item) => item.id === selectedSize?.id)
	}

	const getWeightByDough = () => {
		const isThinDough = selectedDough?.name === thinDough
		return isThinDough
			? clickedMenuItem?.weightItem.slice(-2)
			: clickedMenuItem?.weightItem.slice(0, 1)
	}

	const getTotalWeight = () => {
		const weightBySize = getWeightBySize()
		const weightByDough = getWeightByDough()

		if (!selectedDough || !clickedMenuItem || !weightBySize || !weightByDough) {
			return null
		}

		if (selectedDough.name === thinDough) {
			const selectedSizeIndex = clickedMenuItem.sizes.findIndex((_, i) => i + 1 === selectedSize?.id)
			return weightByDough[selectedSizeIndex]?.weight
		} else {
			return weightBySize.weight
		}
	}

	const handleSizeChange = (size: Option) => {
		dispatch(setSelectedSize(size))
	}

	const handleDoughChange = (dough: Option) => {
		dispatch(setSelectedDough(dough))
	};

  return (
    <>
      <div>
				<span className="font-bold md:text-sm md:leading-[15px] text-base leading-5 md:mb-4 mb-5">
					Вес:
				</span>
				<span>&nbsp;{getTotalWeight()} г</span>
      </div>
      <div className="flex flex-col gap-2">
				<RadioGroup value={selectedSize} onChange={handleSizeChange}>
					<div className="flex flex-row gap-2.5">
						{clickedMenuItem?.sizes.map((size) => (
              <RadioGroupOption
                key={size.id}
								option={size}
                isChecked={selectedSize === size}
								isDisable={selectedDough?.name === thinDough && size.name === smallSize}
                className="leading-[15px] w-full h-[60px] flex_center"
              />
            ))}
          </div>
        </RadioGroup>
				<RadioGroup value={selectedDough} onChange={handleDoughChange}>
					<div className="flex flex-row gap-2.5">
						{clickedMenuItem?.dough.map((dough) => (
              <RadioGroupOption
                key={dough.id}
                option={dough}
								isChecked={dough === selectedDough}
								isDisable={selectedSize?.name === smallSize && selectedDough !== dough}
                className="leading-[15px] w-full h-[60px] flex_center"
              />
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default ItemSizeSelection