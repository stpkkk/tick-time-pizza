"use client";
import React, { useEffect } from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { addToCart } from "@/redux/features/menuSlice";
import { IProduct } from "@/types";
import { useAppDispatch } from "@/redux/hooks";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems) as IProduct[];
      dispatch(addToCart(parsedItems));
    }
  }, [dispatch]);

  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
