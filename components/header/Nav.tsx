import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { RiLoginCircleLine } from "react-icons/ri";
import Phone from "./Phone";

type Props = {
  isMenuOpen?: boolean;
};

const Nav: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <nav className="sm:flex sm:flex-col">
      <ul
        className={`${
          isMenuOpen
            ? "absolute sm:left-0 sm:top-[70px] p-4 flex_start flex-col"
            : "md:hidden"
        } nav_links`}
      >
        {navLinks.map(link => (
          <li className="p-2 cursor-pointer" key={link.key}>
            <Link draggable="false" href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/login"
            className="hidden sm:flex sm:items-center sm:gap-2 sm:p-2 sm:cursor-pointer"
          >
            <div>Войти</div>
            <RiLoginCircleLine size={25} />
          </Link>
        </li>
        <li className="hidden sm:flex">
          <Phone />
        </li>
        <li className="text-[10px] hidden sm:flex">
          *минимальная сумма заказа на доставку равна стоимости средней пиццы.
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
