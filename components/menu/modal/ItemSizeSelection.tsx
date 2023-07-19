"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RadioGroup } from "@headlessui/react";

import { RadioGroupOption } from "@/components/common";

const ItemSizeSelection: React.FC = () => {
  const { clickedMenuItem } = useAppSelector(state => state.menuReducer);

  const [selectedSize, setSelectedSize] = useState(clickedMenuItem?.sizes[0]);
  const [selectedOption, setSelectedOption] = useState(
    clickedMenuItem?.options[1]
  );

  return (
    <>
      <div>
        <p className="text-sm sm:leading-[15px] md:text-base leading-5">
          <span className="font-bold">Вес: </span>355 г
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <RadioGroup value={selectedSize} onChange={setSelectedSize}>
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
        <RadioGroup value={selectedOption} onChange={setSelectedOption}>
          <div className="flex flex-row gap-2">
            {clickedMenuItem?.options.map(option => (
              <RadioGroupOption
                key={option.id}
                option={option}
                isChecked={selectedOption === option}
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
