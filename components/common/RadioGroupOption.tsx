"use client";
import React from "react";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";

import { Option } from "@/types";

export interface RadioGroupOptionProps {
	option: any;
  className: string;
	isChecked?: boolean
	crossed?: string
}

const RadioGroupOption: React.FC<RadioGroupOptionProps> = ({
  option,
  className,
  isChecked,
	crossed,
}) => {
  const backgroundClass = isChecked
		? "bg-yellow no-underline hover:bg-yellowLight"
		: "bg-grayLight no-underline hover:bg-gray";

  return (
    <RadioGroup.Option
      key={option.id}
      value={option}
			className={`${backgroundClass} ${className}  cursor-pointer rounded-2xl text-sm font-bold sm:text-[12px]`}
		>
			<div className="flex justify-between items-center gap-2">
				{option.image && (
					<div className="w-5 h-5">
						<Image
							src={option.image}
							alt={option.name.toString()}
							width={20}
							height={20}
							loading="lazy"
							className="sm:w-4 sm:h-4"
						/>
					</div>
				)}
				<div>
					<span className={`${crossed}`}>{option.name}</span>
				</div>
			</div>
    </RadioGroup.Option>
  );
};

export default RadioGroupOption;
