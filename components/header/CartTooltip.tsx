import React, { MutableRefObject } from "react";
import Link from "next/link";

import { addToCart } from "@/redux/features/menuSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RiDeleteBin6Line } from "react-icons/ri";
import { calculatePrices } from "@/utils";
import { IProduct } from "@/types";

interface CartTooltip {
  products: IProduct[];
  cartTooltipRef: MutableRefObject<HTMLDivElement | null>;
}

const CartTooltip: React.FC<CartTooltip> = ({ products, cartTooltipRef }) => {
  const dispatch = useAppDispatch();

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const onRemove = (productId: number) => {
    const updatedItems = products.filter(product => product.id !== productId);
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className="right-0 header_tooltip" ref={cartTooltipRef}>
      {products.length >= 0 ? (
        <>
          <ul className="max-h-[222px] scroll-container thin_scroll overflow-auto md:mb-4 mb-[30px] flex flex-col gap-4 pr-2 -mr-2">
            {products.map(product => (
              <li key={product.id}>
                <div>
                  <div className="flex flex-row gap-3">
                    <p className="text-[14px] md:text-sm font-semibold mr-auto break-words">
                      {product.title}
                    </p>
                    <p className="text-[14px] md:text-sm whitespace-nowrap">
                      {product.productAmount} шт.
                    </p>
                    <p className="text-[14px] md:text-sm font-semibold w-10 md:w-16 text-center whitespace-nowrap">
                      {
                        calculatePrices(
                          product,
                          product.selectedSize || null,
                          product.additionalIngredients,
                          product.productAmount || 1
                        ).totalPrice
                      }{" "}
                      ₽
                    </p>
                    <button type="button" onClick={() => onRemove(product.id)}>
                      <RiDeleteBin6Line
                        size={15}
                        className="text-grayDark cursor-pointer hover:text-primary"
                      />
                    </button>
                  </div>
                  <p className="text-[12px] md:text-xs md:leading-[15px] font-normal break-words">
                    {product.selectedSize?.name},{product.selectedDough?.name}
                  </p>
                  {product.removedIngredients &&
                    product.removedIngredients.length > 0 && (
                      <p className="text-[12px] md:text-xs md:leading-[15px] font-normal break-words">
                        Убрать:&nbsp;
                        {product.removedIngredients?.map(ing => (
                          <span key={ing.id}>{ing.name},&nbsp;</span>
                        ))}
                      </p>
                    )}
                  {product.additionalIngredients.length > 0 && (
                    <p className="text-[12px] md:text-xs md:leading-[15px] font-normal break-words">
                      Добавить:&nbsp;
                      {product.additionalIngredients.map(ing => (
                        <span key={ing.id}>
                          {ing.name}&nbsp;({ing.amount}шт.),&nbsp;
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Link href="/cart" as="cart">
            <button className="btn_red">Перейти в корзину</button>
          </Link>
        </>
      ) : (
        <>
          <div className="mb-4">
            <span className="text-start">Корзина пока пуста</span>
          </div>
          <Link href="/cart" as="cart">
            <button className="btn_red">Перейти в корзину</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartTooltip;
