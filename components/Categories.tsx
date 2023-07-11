"use client";
import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";

import { categories } from "@/constants";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <RadioGroup
      value={selectedCategory}
      onChange={setSelectedCategory}
      className="w-full max-w-[700px] my-8"
    >
      <div className="flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar gap-2">
        {categories.map((category, index) => (
          <RadioGroup.Option
            key={category.name}
            value={category}
            className={({ checked }) =>
              `${
                checked
                  ? "bg-yellowButton hover:bg-yellowButtonHover"
                  : "bg-light hover:bg-hoverGray"
              } relative flex cursor-pointer rounded-xl px-[30px] py-[20px] shadow-md `
            }
          >
            <div className="flex justify-between gap-2 text-sm font-bold leading-[20px]">
              {index === 0 ? (
                <RadioGroup.Label as="p">
                  <span>{category.name}</span>
                </RadioGroup.Label>
              ) : (
                <>
                  <RadioGroup.Label as="div">
                    {category.img && (
                      <div className="w-5 h-5">
                        <Image
                          src={category.img}
                          alt={category.name}
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </RadioGroup.Label>
                  <RadioGroup.Description as="span">
                    <span>{category.name}</span>
                  </RadioGroup.Description>
                </>
              )}
            </div>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Categories;
