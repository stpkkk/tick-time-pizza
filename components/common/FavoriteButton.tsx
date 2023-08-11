import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux/features/menuSlice";

import { HeartIconGray, HeartIconRed } from "@/public/assets/icons";
import { IProduct } from "@/types";

type FavoriteButtonProps = {
  product: IProduct | null;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(
    state => state.menuReducer.favoriteProducts
  );

  const isProductFavorite =
    product && favoriteProducts?.some(item => item.id === product.id);

  const toggleFavorite = () => {
    if (product) {
      if (isProductFavorite) {
        dispatch(removeFromFavorites(product.id));
      } else {
        dispatch(addToFavorites(product));
      }
    }
  };

  return (
    <button
      className="cursor-pointer fill-grayDark"
      onClick={toggleFavorite}
      type="button"
      title="Добавить в избранное"
    >
      {isProductFavorite ? <HeartIconRed /> : <HeartIconGray />}
    </button>
  );
};

export default FavoriteButton;
