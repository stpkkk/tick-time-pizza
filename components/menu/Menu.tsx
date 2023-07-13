import React from "react";
import { menu } from "@/constants";
import MenuItem from "./MenuItem";
import { MenuItemTypes } from "@/types";

const Menu: React.FC = () => {
  return (
    <div className="w-full py-[50px] px-[60px] bg-white rounded-2xl sm:p-0">
      <ul className="grid grid-cols-4 sm:grid-cols-1 justify-items-center items-start gap-y-[50px] gap-x-[30px] sm:gap-y-5">
        {menu.map((item: MenuItemTypes) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
