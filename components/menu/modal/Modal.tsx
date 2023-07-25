"use client";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { toggleModal } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";

import ItemSizeSelection from "./ItemSizeSelection";
import Counter from "./Counter";
import { HeartIcon } from "@/public/assets/icons";
import ImageNotice from "./ImageNotice";
import IngredientsSelect from "./IngredientsSelect";
import IngredientsRemove from "./IngredientsRemove";
import NutritionalValue from "./NutritionalValue";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { clickedMenuItem, value } = useAppSelector(state => state.menuReducer);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalLeft = useRef<HTMLDivElement>(null);
  const [modalHeight, setModalHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const getModalHeight = () => {
      if (modalLeft.current) {
        const height = modalLeft.current.clientHeight;
        setTimeout(() => {
          setModalHeight(height);
        }, 1000);
      }
    };

    getModalHeight();
  }, []);

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
        <div className="flex_center min-h-full sm:text-center sm:items-stretch p-4 sm:p-0">
          <div
            ref={modalRef}
            className="relative max-w-[950px] w-full overflow-hidden bg-white align-middle drop-shadow-custom transition-all rounded-2xl opacity-100 scale-100 sm:rounded-none"
          >
            <button
              className="flex items-center z-10 gap-3 text-grayDark hover:text-primary absolute sm:top-0 sm:right-0 sm:p-1 top-[18px] right-[18px]"
              type="button"
              onClick={handleClick}
            >
              <RiCloseFill size={36} />
            </button>
            <form className="modal_form">
              <div
                className="relative fill flex_center flex-col gap-[30px]"
                ref={modalLeft}
              >
                <Image
                  src={clickedMenuItem?.image ? clickedMenuItem?.image : ""}
                  alt={clickedMenuItem?.title ? clickedMenuItem?.title : ""}
                  width={325}
                  height={325}
                />
                <p className="block text-center text-sm sm:text-[0.75rem]leading-[1.25rem]">
                  {clickedMenuItem?.ingredients}
                </p>
                <div className="flex_between flex-row gap-7 w-full whitespace-nowrap max-w-[236px]">
                  <div className="flex_between flex-1 max-w-[128px] gap-2 w-22 sm:w-32 text-base -ml-2">
                    <Counter />
                  </div>
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
              <div
                className={`flex flex-col gap-[30px] pr-[50px] scroll scroll-container overflow-auto modal_scrollbar`}
                style={{ height: `${modalHeight}px` }}
              >
                <h4 className="uppercase font-zheldor text-[2.5rem] leading-[3rem]">
                  {clickedMenuItem?.title}
                </h4>
                <ItemSizeSelection />
                <IngredientsSelect />
                <IngredientsRemove />
                <NutritionalValue />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
