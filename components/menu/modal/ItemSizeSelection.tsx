"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedDough, setSelectedSize } from "@/redux/features/menuSlice";
import { RadioGroup } from "@headlessui/react";

import { RadioGroupOption } from "@/components/common";

const ItemSizeSelection: React.FC = () => {
  const { clickedMenuItem, selectedSize, selectedDough } = useAppSelector(
    state => state.menuReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Set the default selected values
    if (clickedMenuItem?.sizes.length && !selectedSize) {
      dispatch(setSelectedSize(clickedMenuItem.sizes[0]));
    }
    if (clickedMenuItem?.dough.length && !selectedDough) {
      dispatch(setSelectedDough(clickedMenuItem.dough[1]));
    }
  }, [clickedMenuItem, selectedSize, selectedDough, dispatch]);

  return (
    <>
      <div>
        <p className="text-sm sm:text-xs md:text-base">
          <span className="font-bold">Вес: </span>355 г
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <RadioGroup
          value={selectedSize}
          onChange={size => dispatch(setSelectedSize(size))}
        >
          <div className="flex flex-row gap-2">
            {clickedMenuItem?.sizes.map(size => (
              <RadioGroupOption
                key={size.id}
                option={size}
                isChecked={selectedSize === size}
                className="leading-[15px] w-full h-[60px] flex_center"
              />
            ))}
          </div>
        </RadioGroup>
        <RadioGroup
          value={selectedDough}
          onChange={dough => dispatch(setSelectedDough(dough))}
        >
          <div className="flex flex-row gap-2">
            {clickedMenuItem?.dough.map(dough => (
              <RadioGroupOption
                key={dough.id}
                option={dough}
                isChecked={selectedDough === dough}
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
