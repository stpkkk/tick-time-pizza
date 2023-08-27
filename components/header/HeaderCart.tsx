"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/menuSlice";
import { setIsHoveringCart } from "@/redux/features/headerSlice";
import { BsBasket2 } from "react-icons/bs";

import CartTooltip from "./CartTooltip";
import { calculateCartTotalPrice } from "@/utils";
import { IProduct } from "@/types";

const HeaderCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.menuReducer.cartProducts);
  const isHoveringCart = useAppSelector(
    state => state.headerReducer.isHoveringCart
  );

  const cartTooltipRef = useRef<HTMLDivElement | null>(null);
  const cartTotalPrice = calculateCartTotalPrice(cartProducts).cartTotalPrice;
  const totalAmount = cartProducts
    .map(product => product.productAmount)
    .reduce((amount, acc) => amount + acc, 0);

  const handleMouseOverCart = () => {
    dispatch(setIsHoveringCart(true));
  };

  const handleMouseOutCart = (e: React.MouseEvent<HTMLDivElement>) => {
    const isHoveringTooltip =
      cartTooltipRef.current &&
      cartTooltipRef.current.contains(e.relatedTarget as Node);

    if (!isHoveringTooltip) {
      dispatch(setIsHoveringCart(false));
    }
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems) as IProduct[];
      dispatch(addToCart(parsedItems));
    }
  }, []);

  return (
    <div
      className="h-full hover:bg-grayLight relative"
      onMouseOver={handleMouseOverCart}
      onMouseOut={handleMouseOutCart}
    >
      <Link
        href="/cart"
        as="cart"
        className="flex_center flex-col gap-2 w-[6rem] h-full "
      >
        <BsBasket2 size={25} />
        <span className="text-sm font-semibold">
          {cartTotalPrice <= 0 ? "Корзина" : `${cartTotalPrice} ₽`}
        </span>
        {totalAmount ? (
          <span className="absolute top-4 right-6 flex p-1 items-center bg-secondary min-w-[19px] h-[19px] rounded-full justify-center text-white text-[10px] font-semibold">
            {totalAmount}
          </span>
        ) : (
          ""
        )}
      </Link>
      <div>
        {isHoveringCart && (
          <CartTooltip
            products={cartProducts}
            cartTooltipRef={cartTooltipRef}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderCart;
