import React from "react";
import { toggleNav } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";

import { GrClose } from "react-icons/gr";
import { BsBasket2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "./Nav";
import Logo from "../common/Logo";

const HeaderMobile: React.FC = () => {
  const dispatch = useAppDispatch();
  const isNavOpen = useAppSelector(state => state.headerReducer.isNavOpen);

  const handleClick = () => {
    dispatch(toggleNav());
  };
  return (
    <header className="hidden header sm:flex sm:items-center sm:px-6 uppercase">
      <Logo />
      <div className="flex gap-2">
        <Link href="cart" className="px-4">
          <BsBasket2 size={30} />
        </Link>
        <button className="px-4 cursor-pointer" onClick={handleClick}>
          {isNavOpen ? <GrClose size={30} /> : <RxHamburgerMenu size={30} />}
        </button>
      </div>
      {isNavOpen && <Nav />}
    </header>
  );
};

export default HeaderMobile;
