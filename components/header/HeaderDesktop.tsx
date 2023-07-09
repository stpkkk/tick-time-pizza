"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import { RiLoginCircleLine } from "react-icons/ri";
import { BsBasket2 } from "react-icons/bs";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Phone from "./Phone";
import { Button, Logo } from "../common";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderDesktop: React.FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const [isHoveringPhone, setIsHoveringPhone] = useState(false);
  const [isHoveringCart, setIsHoveringCart] = useState(false);

  const handleMouseOverPhone = () => {
    setIsHoveringPhone(true);
  };

  const handleMouseOutPhone = () => {
    setIsHoveringPhone(false);
  };

  const handleMouseOverCart = () => {
    setIsHoveringCart(true);
  };

  const handleMouseOutCart = () => {
    setIsHoveringCart(false);
  };

  const PhoneTooltip = () => (
    <div className="left-0 header_tooltip">
      *минимальная сумма заказа на доставку равна стоимости средней пиццы.
    </div>
  );

  const CartTooltip = () => (
    <div className="right-0 header_tooltip">
      <p className="block text-start mb-4">Корзина пока пуста</p>
      <a href="/cart">
        <Button name="Перейти в корзину" />
      </a>
    </div>
  );

  return (
    <header className="flex_between sm:hidden header">
      <Logo />
      <div className="md:flex-grow md:ml-[20px]">
        <div
          className={`${isMenuOpen && "bg-light"} header_dropdown`}
          onClick={() => {
            setIsMenuOpen(prev => !prev);
          }}
        >
          <span className="block text-sm font-semibold">Меню</span>
          <IoIosArrowDown />
        </div>
        <Nav isMenuOpen={isMenuOpen} />
      </div>
      <div
        className="hover:bg-light ml-4 relative h-full"
        onMouseOver={handleMouseOverPhone}
        onMouseOut={handleMouseOutPhone}
      >
        <Phone />
        {isHoveringPhone && <PhoneTooltip />}
      </div>
      <Link
        href="/login"
        className="flex_center flex-col gap-2 w-[6rem] h-full hover:bg-light ml-auto"
      >
        <RiLoginCircleLine size={25} />
        <span className="text-sm font-semibold">Войти</span>
      </Link>
      <div
        className="h-full hover:bg-light relative"
        onMouseOver={handleMouseOverCart}
        onMouseOut={handleMouseOutCart}
      >
        <a href="cart" className="flex_center flex-col gap-2 w-[6rem] h-full ">
          <BsBasket2 size={25} />
          <span className="text-sm font-semibold">Корзина</span>
        </a>
        {isHoveringCart && <CartTooltip />}
      </div>
    </header>
  );
};

export default HeaderDesktop;
