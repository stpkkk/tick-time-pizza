import React from "react";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

import { RiLoginCircleLine } from "react-icons/ri";
import { navLinks } from "@/constants";
import Phone from "./Phone";

const Nav: React.FC = () => {
  const isNavOpen = useAppSelector(state => state.headerReducer.isNavOpen);

  return (
    <nav className="sm:flex sm:flex-col font-semibold">
      <ul
        className={`${
          isNavOpen ? "absolute sm:left-0 sm:top-[58px] p-6" : "md:hidden"
        } nav_links -z-10`}
      >
        {navLinks.map(link => (
          <li className="p-2 cursor-pointer" key={link.key}>
            <Link draggable="false" as="nav" href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/login"
            as="login"
            className="hidden sm:flex sm:items-center sm:gap-2 sm:p-2 sm:cursor-pointer"
          >
            <div>Войти</div>
            <RiLoginCircleLine size={25} />
          </Link>
        </li>
        <li className="hidden sm:flex">
          <Phone />
        </li>
        <p className="!text-[10px] text-xs font-normal normal-case hidden sm:block">
          *Минимальная сумма заказа на доставку без учета скидок — 545 рублей!
        </p>
      </ul>
    </nav>
  );
};

export default Nav;
