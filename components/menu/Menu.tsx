"use client";
import React from "react"
import { useAppSelector } from "@/redux/hooks";

import { menu } from "@/constants"
import Product from "./Product"
import { Modal } from "./modal";
import { IProduct } from "@/types"

const Menu: React.FC = () => {
  const { isModalOpen } = useAppSelector(state => state.menuReducer);

  return (
    <>
      <div className="w-full py-[50px] px-[60px] bg-white rounded-2xl sm:p-0 drop-shadow-custom sm:drop-shadow-none">
        <ul className="grid grid-cols-4 sm:grid-cols-1 justify-items-center items-start gap-y-[50px] gap-x-[30px] sm:gap-y-5">
					{menu.map((item: IProduct) => (
						<Product key={item.id} item={item} />
          ))}
        </ul>
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Menu;
