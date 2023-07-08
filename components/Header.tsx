"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants";
import Logo from "../public/assets/icons/logo.svg";
import { RiLoginCircleLine } from "react-icons/ri";
import { BsBasket2 } from "react-icons/bs";
import { Button } from "@/components";

const Header = () => {
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
    <div className="bg-light w-[400px] absolute top-[90px] left-0 rounded-b-2xl text-[12px] text-center p-6">
      *минимальная сумма заказа на доставку равна стоимости средней пиццы.
    </div>
  );

  const CartTooltip = () => (
    <div className="bg-light w-[400px] absolute top-[90px] right-0 rounded-b-2xl text-[12px] text-center p-6">
      <p className="block text-start mb-4">Корзина пока пуста</p>
      <a href="/cart">
        <Button name="Перейти в корзину" />
      </a>
    </div>
  );

  return (
    <header className="h-[90px] px-[60px] bg-white text-primary rounded-b-2xl flex_between shadow">
      <Link href="/" className="mr-auto">
        <Image src={Logo} width={45} height={45} alt="logo" priority />
      </Link>
      <ul className="flex gap-2 text-sm font-semibold">
        {NavLinks.map((link, index) => (
          <li className="p-2" key={index}>
            <Link draggable="false" href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="hover:bg-light px-6 ml-6 flex_center flex-col h-full cursor-pointer relative"
        onMouseOver={handleMouseOverPhone}
        onMouseOut={handleMouseOutPhone}
      >
        <span>
          <a href="tel:330204" className="font-zheldor text-[2rem] leading-10">
            33-02-04
          </a>
        </span>
        <p className="text-[10px] font-semibold">
          круглосуточная
          <br /> бесплатная доставка*
        </p>
        {isHoveringPhone && <PhoneTooltip />}
      </div>
      <a
        href="/login"
        className="flex_center flex-col gap-2 w-[6.25rem] h-full hover:bg-light ml-auto"
        type="button"
      >
        <RiLoginCircleLine size={25} />
        <span className="text-sm font-semibold">Войти</span>
      </a>
      <div
        className="h-full hover:bg-light relative"
        onMouseOver={handleMouseOverCart}
        onMouseOut={handleMouseOutCart}
      >
        <a
          href="cart"
          className="flex_center flex-col gap-2 w-[6.25rem] h-full "
        >
          <BsBasket2 size={25} />
          <span className="text-sm font-semibold">Корзина</span>
        </a>
        {isHoveringCart && <CartTooltip />}
      </div>
    </header>
  );
};

export default Header;
