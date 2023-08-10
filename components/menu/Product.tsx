import React from "react"
import {
  setSelectedProduct,
  setHoveredItemId,
  toggleModal,
} from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

import { FavoriteButton } from "../common";
import { menu } from "@/constants";
import { IProduct } from "@/types";

type ProductProps = {
  product: IProduct;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { hoveredItemId } = useAppSelector(state => state.menuReducer);

  const isItemHovered = hoveredItemId === product.id;
  const starterPrice = product.prices.find(product => product.id === 0)?.price;

  const handleMouseOverItem = () => {
    dispatch(setHoveredItemId(product.id));
  };

  const handleMouseOutItem = () => {
    dispatch(setHoveredItemId(null));
  };

  const handleClickProduct = (clickedProduct: IProduct) => {
    const selectedProduct = menu.find(
      product => product.id === clickedProduct.id
    );

    if (selectedProduct) {
      dispatch(setSelectedProduct(selectedProduct));
    }

    dispatch(toggleModal());
  };

  return (
    <li
      className="relative h-full max-w-[255px] sm:max-w-[420px] w-full flex flex-col cursor-pointer sm:drop-shadow-custom rounded-lg sm:p-4 bg-white"
      onMouseOver={handleMouseOverItem}
      onMouseOut={handleMouseOutItem}
    >
      <div
        className="flex flex-col justify-between h-full"
        onClick={() => handleClickProduct(product)}
      >
        <div className="flex flex-col gap-4">
          <Image
            src={product.image}
            alt={product.title}
            loading="lazy"
            className={`${
              isItemHovered && "opacity-50"
            } self-center aspect-square w-full h-full max-w-[255px] max-h-[255px]`}
          />
          <span className="block font-semibold leading-5 mb-4">
            {product.title}
          </span>
        </div>
        <div>
          <p className="text-[14px] leading-[15px] sm:text-[12px] mb-4">
            {product.ingredients}
          </p>
        </div>
        <div className="flex_between">
          <span className="font-semibold">{`от ${starterPrice} ₽`}</span>
          <button className="btn_yellow max-w-[112px]" type="button">
            Выбрать
          </button>
        </div>
      </div>
      <div className="absolute z-[1] top-0 right-0 sm:p-2 sm:top-2 sm:right-2">
        <FavoriteButton product={product} />
      </div>
      <div className="absolute z-[1] top-0 left-0 sm:p-2 sm:top-2 sm:left-2 flex flex-col gap-1">
        {product.categories?.map(cat => (
          <Image
            src={cat.image ? cat.image : "😢"}
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

export default Product
