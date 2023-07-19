"use client";
import React from "react";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";

import { Option } from "@/types";

export interface RadioGroupOptionProps {
  option: Option;
  className: string;
  isChecked: boolean;
}

const RadioGroupOption: React.FC<RadioGroupOptionProps> = ({
  option,
  className,
  isChecked,
}) => {
  const backgroundClass = isChecked
    ? "bg-yellowButton hover:bg-yellowButtonHover"
    : "bg-light hover:bg-hoverGray";

  return (
    <RadioGroup.Option
      key={option.id}
      value={option}
      className={`${backgroundClass} ${className} cursor-pointer rounded-2xl px-[30px] py-[20px] text-sm font-bold`}
    >
      {!option.name ? (
        <p>{option.name}</p>
      ) : (
        <div className="flex_between gap-2">
          {option.image && (
            <div className="w-5 h-5">
              <Image
                src={option.image}
                alt={option.name.toString()}
                width={20}
                height={20}
                loading="lazy"
              />
            </div>
          )}
          <div>
            <p>{option.name}</p>
          </div>
        </div>
      )}
    </RadioGroup.Option>
  );
};

export default RadioGroupOption;
