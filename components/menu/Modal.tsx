"use client";
import { toggleModal } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { clickedMenuItem } = useAppSelector(state => state.menuReducer);
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

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-25 opacity-100"></div>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex_center min-h-full sm:text-center sm:items-stretch p-4">
          <div
            ref={modalRef}
            className="relative w-full overflow-hidden bg-white align-middle drop-shadow-3xl transition-all rounded-2xl max-w-[950px] opacity-100 scale-100"
          >
            <button
              className="flex items-center z-10 gap-3 font-semibold text-sm text-hoverGray hover:text-primary disabled:text-dark-light no-outline absolute sm:top-0 sm:right-0 sm:p-3 top-[18px] right-[18px]"
              type="button"
              onClick={handleClick}
            >
              <RiCloseFill size={36} />
            </button>
            <form className="grid grid-cols-2 gap-[60px] p-[60px] bg-white drop-shadow-3xl text-left h-full overflow-auto overflow-x-hidden ">
              <div className="fill flex_center flex-col gap-[30px]">
                <Image
                  src={clickedMenuItem?.image ? clickedMenuItem?.image : ""}
                  alt={clickedMenuItem?.title ? clickedMenuItem?.title : ""}
                  width={325}
                  height={325}
                />
                <div className="text-center">
                  {clickedMenuItem?.ingredients}
                </div>
                <div className="flex_center gap-7 w-full">
                  <div className="flex_between">
                    <button>+</button>
                    <span className="block">? шт.</span>
                    <button>-</button>
                  </div>
                  <div className="">{clickedMenuItem?.price} ₽</div>
                </div>
                <button>Добавить в корзину</button>
              </div>
              <div className="uppercase font-zheldor text-[40px]">
                {clickedMenuItem?.title}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
