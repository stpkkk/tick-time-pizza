"use client";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import CartProducts from "@/components/cart/CartProducts";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const router = useRouter();
  return (
    <div className="content_container h-[calc(100vh-268px)] pt-[90px]">
      <div className="flex flex-row gap-4 md:ml-4 md:my-4 my-10 ml-6">
        <button
          className="flex items-center gap-3 font-semibold text-sm text-primary disabled:text-dark-light"
          type="button"
          onClick={() => router.back()}
        >
          <FiArrowLeft size={20} />
        </button>
        <h1 className="h1">Корзина</h1>
      </div>
      <CartProducts />
    </div>
  );
};

export default Cart;
