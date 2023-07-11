"use client";
import React from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header: React.FC = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
