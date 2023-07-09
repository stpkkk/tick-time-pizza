import React from "react";
import { BsBasket2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Nav from "./Nav";
import Logo from "../common/Logo";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMobile: React.FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className="relative header hidden sm:flex sm:items-center sm:px-6 uppercase">
      <Logo />
      <div className="flex gap-2">
        <Link href="cart" className="px-4">
          <BsBasket2 size={30} />
        </Link>
        <button
          className="px-4 cursor-pointer"
          onClick={() => {
            setIsMenuOpen(prev => !prev);
          }}
        >
          {isMenuOpen ? <GrClose size={30} /> : <RxHamburgerMenu size={30} />}
        </button>
      </div>
      {isMenuOpen && <Nav isMenuOpen={isMenuOpen} />}
    </header>
  );
};

export default HeaderMobile;
