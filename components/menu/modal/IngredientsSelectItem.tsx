import React from "react";
import Image, { StaticImageData } from "next/image";

import Counter from "./Counter";

type IngredientsSelectItemProps = {
  id: number;
  image: string | StaticImageData;
  name: string;
  weight: number;
  price: number;
};

const IngredientsSelectItem: React.FC<IngredientsSelectItemProps> = ({
  id,
  image,
  name,
  weight,
  price,
}) => {
  return (
    <li
      className="flex justify-between flex-row px-4 py-2.5 rounded-2xl bg-grayLight"
      key={id}
    >
      <div className="flex flex-grow flex-auto basis-[calc(100%-7rem)] items-center flex-row gap-5">
        <div className="w-27 h-27">
          <Image src={image} alt={name} width={27} height={27} />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="md:text-xs md:leading-[15px] text-sm leading-[17px] font-bold break-words">
            {name}
          </span>
          <span className="md:text-xs md:leading-[15px] text-sm leading-[17px] font-normal whitespace-nowrap">
            {weight} г&nbsp;{price} ₽
          </span>
        </div>
        <div className="gap-2 flex justify-between flex-nowrap items-center text-xs sm:text-base ml-auto">
          <Counter />
        </div>
      </div>
    </li>
  );
};

export default IngredientsSelectItem;
