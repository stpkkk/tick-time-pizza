"use client";
import React, { useEffect, useRef } from "react";
import { toggleModal } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";

import ItemSizeSelection from "./ItemSizeSelection";
import Counter from "./Counter";
import { HeartIcon } from "@/public/assets/icons";
import ImageNotice from "./ImageNotice";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { clickedMenuItem, value } = useAppSelector(state => state.menuReducer);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      dispatch(toggleModal());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClick = () => {
    dispatch(toggleModal());
  };

  const totalPrice = clickedMenuItem?.price
    ? clickedMenuItem?.price * value
    : "";

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-25 opacity-100" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex_center min-h-full sm:text-center sm:items-stretch ">
          <div
            ref={modalRef}
            className="relative w-full overflow-hidden bg-white align-middle drop-shadow-custom transition-all rounded-2xl max-w-[950px] opacity-100 scale-100"
          >
            <button
              className="flex items-center z-10 gap-3 font-semibold text-sm text-gray hover:text-primary no-outline absolute sm:top-0 sm:right-0 sm:p-3 top-[18px] right-[18px]"
              type="button"
              onClick={handleClick}
            >
              <RiCloseFill size={36} />
            </button>
            <form className="grid grid-cols-2 gap-[60px] p-[60px] sm:p-8 bg-white drop-shadow-custom text-left h-full overflow-auto overflow-x-hidden sm:grid-cols-1">
              <div className="relative fill flex_center flex-col gap-[30px]">
                <Image
                  src={clickedMenuItem?.image ? clickedMenuItem?.image : ""}
                  alt={clickedMenuItem?.title ? clickedMenuItem?.title : ""}
                  width={325}
                  height={325}
                />
                <p className="block text-center text-sm sm:text-[0.75rem]leading-[1.25rem]">
                  {clickedMenuItem?.ingredients}
                </p>
                <div className="flex_center gap-7 w-full">
                  <Counter />
                  <div>
                    <span className="text-xl font-semibold md:text-base">
                      {totalPrice} ₽
                    </span>
                  </div>
                </div>
                <button className="btn_red max-w-[236px]">
                  Добавить в корзину
                </button>
                <div className="absolute top-0 right-0 cursor-pointer">
                  <HeartIcon />
                </div>
                <ImageNotice />
              </div>
              <div className="flex flex-col gap-[30px]">
                {clickedMenuItem?.categories ? (
                  <div className="flex gap-5">
                    {clickedMenuItem?.categories?.map(cat => (
                      <div key={cat.key} className="flex_center gap-2">
                        <Image
                          src={cat.image ? cat.image : ""}
                          alt={cat.title}
                          width={20}
                          height={20}
                        />
                        <div>
                          <span className="text-xs font-bold">{cat.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                <h4 className="uppercase font-zheldor text-[2.5rem] leading-[3rem]">
                  {clickedMenuItem?.title}
                </h4>
                <ItemSizeSelection />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
