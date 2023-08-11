"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { menu } from "@/constants";
import Product from "./Product";
import { Modal } from "./modal";
import { IProduct } from "@/types";
import NoProduct from "../NoProduct";

const Menu: React.FC = () => {
  const { isModalOpen, selectedCategory, favoriteProducts } = useAppSelector(
    state => state.menuReducer
  );

  const getCategoryProducts = (category: string | number): IProduct[] => {
    switch (category) {
      case "Избранное":
        return favoriteProducts;
      case "Без Мяса":
        return favoriteProducts;
      case "Подходит для Детей":
        return [];
      case "Остроя":
        return [];
      default:
        return menu;
    }
  };

  const productsToShow = getCategoryProducts(selectedCategory?.name || "");

  return (
    <>
      <div className="w-full py-[50px] px-[60px] bg-white rounded-2xl sm:p-0 drop-shadow-custom sm:drop-shadow-none">
        {productsToShow.length > 0 ? (
          <ul className="grid grid-cols-4 sm:grid-cols-1 justify-items-center items-start gap-y-[50px] gap-x-[30px] sm:gap-y-5">
            {productsToShow.map((product: IProduct) => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <NoProduct />
        )}
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Menu;






