"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedCategory } from "@/redux/features/menuSlice";
import { RadioGroup } from "@headlessui/react";

import { RadioGroupOption } from "./common";
import { categories } from "@/constants";

const Categories: React.FC = () => {
  const selectedCategory = useAppSelector(
    state => state.menuReducer.selectedCategory
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Set the default selected category
    if (!selectedCategory) {
      dispatch(setSelectedCategory(categories[0]));
    }
  }, [selectedCategory, dispatch]);

  return (
    <RadioGroup
      value={selectedCategory}
      onChange={category => dispatch(setSelectedCategory(category))}
      className="w-full max-w-[700px] my-[30px] mt-[120px]"
    >
      <div className="flex flex-row gap-2 flex-nowrap overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar">
        {categories.map(category => (
          <RadioGroupOption
            key={category.id}
            option={category}
            isChecked={selectedCategory === category}
            className="leading-[20px] px-[30px] py-[20px]"
          />
        ))}
      </div>
    </RadioGroup>
  );
};

export default Categories;
