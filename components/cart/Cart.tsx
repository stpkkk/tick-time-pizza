"use client";
import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import { IProduct } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/menuSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.menuReducer.cartProducts);

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems) as IProduct[];
      dispatch(addToCart(parsedItems));
    }
  }, []);

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const modifyCartItem = (
    itemId: number,
    modifier: (item: IProduct) => IProduct
  ) => {
    const updatedItems = cartProducts.map(item =>
      item.id === itemId ? modifier(item) : item
    );
    updateItemsInLocalStorage(updatedItems);
  };

  const handleIncrement = (itemId: number) => {
    modifyCartItem(itemId, item => ({
      ...item,
      productAmount: (item.productAmount || 1) + 1,
    }));
  };

  const handleDecrement = (itemId: number) => {
    modifyCartItem(itemId, item => ({
      ...item,
      productAmount:
        item.productAmount && item.productAmount > 1
          ? item.productAmount - 1
          : 1,
    }));
  };

  const removeItem = (itemId: number) => {
    const updatedItems = cartProducts.filter(item => item.id !== itemId);
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className="flex sm:flex-col flex-row gap-[30px] w-full">
      <div className="w-full max-w-[calc(100%-420px)]">
        <ul className="sm:py-8 sm:px-4 py-[50px] px-[60px] rounded-2xl drop-shadow-custom bg-white flex flex-col gap-[30px]">
          {cartProducts.map(item => (
            <CartProduct
              key={item.id}
              item={item}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
