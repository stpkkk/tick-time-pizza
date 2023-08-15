"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedCategory } from "@/redux/features/menuSlice";
import { RadioGroup } from "@headlessui/react";

import { RadioGroupOption } from "./common";
import { categories } from "@/constants";

const Categories: React.FC = () => {
	const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    state => state.menuReducer.selectedCategory
	);

  useEffect(() => {
    // Set the default selected category
    if (!selectedCategory) {
      dispatch(setSelectedCategory(categories[0]));
    }
  }, [selectedCategory, dispatch]);

  return (
    <div className="max-w-full mx-auto sm:my-4 my-[30px]">
      <RadioGroup
        value={selectedCategory}
        onChange={category => dispatch(setSelectedCategory(category))}
      >
        <div className="flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth md:gap-2 gap-4 scroll-px-4 no-scrollbar">
          <div className="min-w-[0.5rem]" />
          {categories.map(category => (
            <RadioGroupOption
              key={category.id}
              option={category}
              isChecked={selectedCategory === category}
              className="w-auto leading-[20px] px-[30px] py-[20px] sm:px-3 sm:py-[10px]"
            />
          ))}
          <div className="min-w-[0.5rem]" />
        </div>
      </RadioGroup>
    </div>
  );
};

export default Categories;
