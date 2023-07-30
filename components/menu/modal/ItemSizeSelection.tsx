"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setSelectedDough,
  setSelectedSize,
  initializeDefaultValues,
} from "@/redux/features/menuSlice";
import { RadioGroup } from "@headlessui/react";

import { RadioGroupOption } from "@/components/common";

const ItemSizeSelection: React.FC = () => {
  const { clickedMenuItem, selectedSize, selectedDough } = useAppSelector(
    state => state.menuReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeDefaultValues());
	}, [dispatch]);

	const sizeToDisable = clickedMenuItem?.sizes.find(item => item.name === 23)
	const doughToDisable = clickedMenuItem?.dough.find(item => item.name === "Тонкое")

  return (
    <>
      <div>
				<span className="font-bold md:text-sm md:leading-[15px] text-base leading-5 md:mb-4 mb-5">
					Вес:
				</span>
				<span>&nbsp;355 г</span>
      </div>
      <div className="flex flex-col gap-2">
        <RadioGroup
          value={selectedSize}
          onChange={size => dispatch(setSelectedSize(size))}
        >
					<div className="flex flex-row gap-2.5">
            {clickedMenuItem?.sizes.map(size => (
              <RadioGroupOption
                key={size.id}
                option={size}
                isChecked={selectedSize === size}
								isDisable={selectedDough === doughToDisable && size === sizeToDisable}
                className="leading-[15px] w-full h-[60px] flex_center"
              />
            ))}
          </div>
        </RadioGroup>
        <RadioGroup
          value={selectedDough}
          onChange={option => dispatch(setSelectedDough(option))}
        >
					<div className="flex flex-row gap-2.5">
            {clickedMenuItem?.dough.map(dough => (
              <RadioGroupOption
                key={dough.id}
                option={dough}
                isChecked={selectedDough === dough}
								isDisable={sizeToDisable === selectedSize && selectedDough !== dough}
                className="leading-[15px] w-full h-[60px] flex_center"
              />
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default ItemSizeSelection;
