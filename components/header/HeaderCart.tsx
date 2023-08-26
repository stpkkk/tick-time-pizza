"use client";
import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { setIsHoveringCart } from "@/redux/features/headerSlice";
import { BsBasket2 } from "react-icons/bs";

import CartTooltip from "./CartTooltip";

const HeaderCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.menuReducer.cartProducts);
  const isHoveringCart = useAppSelector(
    state => state.headerReducer.isHoveringCart
  );

  const handleMouseOverCart = () => {
    dispatch(setIsHoveringCart(true));
  };

  const cartTooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOutCart = (e: React.MouseEvent<HTMLDivElement>) => {
    const isHoveringTooltip =
      cartTooltipRef.current &&
      cartTooltipRef.current.contains(e.relatedTarget as Node);

    if (!isHoveringTooltip) {
      dispatch(setIsHoveringCart(false));
    }
  };

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
        <span className="text-sm font-semibold">Корзина</span>
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
