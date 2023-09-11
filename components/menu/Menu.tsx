"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";

import { menu } from "@/constants";
import ProductItem from "./ProductItem";
import NoFavoriteProducts from "./NoFavoriteProducts";
import { Modal } from "./modal";
import { IProduct } from "@/types";
import Banner from "./Banner";
import Categories from "./Categories";

const Menu: React.FC = () => {
  const { isModalOpen, selectedCategory, favoriteProducts } = useAppSelector(
    state => state.menuReducer
  );

  function filterByCategoryTitle(menu: IProduct[], categoryTitle: string) {
    return menu.filter(product =>
      product.categories?.some(category => category.title === categoryTitle)
    );
  }

  const forChildrenArray = filterByCategoryTitle(menu, "Подходит для Детей");
  const withoutMeatArray = filterByCategoryTitle(menu, "Без Мяса");
  const hotArray = filterByCategoryTitle(menu, "Острая");

  const getCategoryProducts = (category: string | number): IProduct[] => {
    switch (category) {
      case "Избранное":
        return favoriteProducts;
      case "Без Мяса":
        return withoutMeatArray;
      case "Подходит для Детей":
        return forChildrenArray;
      case "Острая":
        return hotArray;
      default:
        return menu;
    }
  };

  const productsToShow = getCategoryProducts(selectedCategory?.name || "");

  return (
    <>
      <Banner />
      <Categories />
      <div className="py-[50px] px-[60px] bg-white rounded-2xl drop-shadow-custom sm:drop-shadow-none sm:p-0">
        {productsToShow.length > 0 ? (
          <ul className="grid grid-cols-4 sm:grid-cols-1 justify-items-center items-start gap-y-[50px] gap-x-[30px] sm:gap-y-5">
            {productsToShow.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <NoFavoriteProducts />
        )}
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Menu;






