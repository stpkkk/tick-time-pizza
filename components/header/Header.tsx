"use client";
import React, { useState } from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeaderDesktop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
