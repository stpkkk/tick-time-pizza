import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setIsHoveringCart,
  setIsHoveringPhone,
  toggleNav,
} from "@/redux/features/headerSlice";
import Link from "next/link";

import { RiLoginCircleLine } from "react-icons/ri";
import { BsBasket2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Logo } from "../common";
import Nav from "./Nav";
import Phone from "./Phone";

const HeaderDesktop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isNavOpen, isHoveringPhone, isHoveringCart } = useAppSelector(
    state => state.headerReducer
  );

  const handleClick = () => {
    dispatch(toggleNav());
  };

  const handleMouseOverPhone = () => {
    dispatch(setIsHoveringPhone(true));
  };

  const handleMouseOutPhone = () => {
    dispatch(setIsHoveringPhone(false));
  };

  const handleMouseOverCart = () => {
    dispatch(setIsHoveringCart(true));
  };

	const handleMouseOutCart = (e: React.MouseEvent<HTMLDivElement>) => {
    const isHoveringTooltip =
      e.relatedTarget instanceof HTMLElement &&
      e.currentTarget.contains(e.relatedTarget);

    if (!isHoveringTooltip) {
      dispatch(setIsHoveringCart(false));
    }
  };

  const PhoneTooltip = () => (
    <div className="left-0 header_tooltip">
      *минимальная сумма заказа на доставку равна стоимости средней пиццы.
    </div>
  );

  const CartTooltip = () => (
    <div className="right-0 header_tooltip">
      <p className="block text-start mb-4">Корзина пока пуста</p>
      <Link href="/cart" as="cart">
        <button className="btn_red">Перейти в корзину</button>
      </Link>
    </div>
  );

  return (
    <header className="relative flex_between sm:hidden header">
      <Logo />
      <div className="md:flex-grow md:ml-[20px]">
        <div
          className={`${isNavOpen && "bg-grayLight"} header_dropdown`}
          onClick={handleClick}
        >
          <span className="block text-sm font-semibold">Меню</span>
          <IoIosArrowDown />
        </div>
        <Nav />
      </div>
      <div
        className="hover:bg-grayLight ml-4 relative h-full"
        onMouseOver={handleMouseOverPhone}
        onMouseOut={handleMouseOutPhone}
      >
        <Phone />
        {isHoveringPhone && <PhoneTooltip />}
      </div>
      <Link
        href="/login"
        as="login"
        className="flex_center flex-col gap-2 w-[6rem] h-full hover:bg-grayLight ml-[28px]"
      >
        <RiLoginCircleLine size={25} />
        <span className="text-sm font-semibold">Войти</span>
      </Link>
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
        {isHoveringCart && <CartTooltip />}
      </div>
    </header>
  );
};

export default HeaderDesktop;
