import React from "react";
import {
  setClickedMenuItem,
  setHoveredItemId,
  toggleModal,
} from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

import { HeartIcon } from "@/public/assets/icons";
import { menu } from "@/constants";
import { MenuItemTypes } from "@/types";

interface MenuItemProps {
  item: MenuItemTypes;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { hoveredItemId } = useAppSelector(state => state.menuReducer);

  const handleMouseOverItem = () => {
    dispatch(setHoveredItemId(item.id));
  };

  const handleMouseOutItem = () => {
    dispatch(setHoveredItemId(null));
  };

  const handleClick = (clickedItem: MenuItemTypes) => {
    const selectedItem = menu.find(item => item.id === clickedItem.id);
    if (selectedItem) {
      dispatch(setClickedMenuItem(selectedItem));
    }
    dispatch(toggleModal());
  };

  const isItemHovered = hoveredItemId === item.id;

  return (
    <li
      className="relative h-full max-w-[290px] sm:max-w-[420px] w-full flex flex-col cursor-pointer sm:drop-shadow-custom rounded-lg sm:p-4 bg-white"
      onMouseOver={handleMouseOverItem}
      onMouseOut={handleMouseOutItem}
      onClick={() => handleClick(item)}
    >
      <div className="flex-1 mb-5">
        <div className="flex flex-col gap-4">
          <Image
            src={item.image}
            alt={item.title}
            loading="lazy"
            className={`${
              isItemHovered && "opacity-50"
            } self-center max-w-[255px] w-full h-auto`}
          />
          <span className="block font-semibold leading-5 mb-4">
            {item.title}
          </span>
        </div>
        <div>
          <p className="text-[14px] leading-[15px] sm:text-[12px]">
            {item.ingredients}
          </p>
        </div>
      </div>
      <div className="flex flex_between">
        <span className="font-semibold">{`от ${item.price} ₽`}</span>
        <button className="btn_yellow max-w-[112px]" type="button">
          Выбрать
        </button>
      </div>
      <button
        className="absolute z-[1] top-0 right-0 sm:p-2 sm:top-2 sm:right-2"
        type="button"
        title="Добавить в избранное"
      >
        <HeartIcon />
      </button>
      <div className="absolute z-[1] top-0 left-0 sm:p-2 sm:top-2 sm:left-2 flex flex-col gap-1">
        {item.categories?.map(cat => (
          <Image
            src={cat.image ? cat.image : ""}
            alt={cat.title}
            width={16}
            height={16}
            key={cat.key}
          />
        ))}
      </div>
    </li>
  );
};

export default MenuItem;
