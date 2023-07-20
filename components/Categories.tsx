"use client";
import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { categories} from "@/constants";
import { RadioGroupOption } from "./common";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <RadioGroup
      value={selectedCategory}
      onChange={setSelectedCategory}
      className="w-full max-w-[700px] my-[30px] mt-[120px]"
    >
      <div className="flex flex-row gap-2 flex-nowrap overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar">
        {categories.map(category => (
          <RadioGroupOption
            key={category.id}
            option={category}
            isChecked={selectedCategory === category}
            className="leading-[20px]"
          />
        ))}
      </div>
    </RadioGroup>
  );
};

export default Categories;
