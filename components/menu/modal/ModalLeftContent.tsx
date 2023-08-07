"use client"
import React, { useCallback, useEffect, useRef } from 'react'
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { HeartIcon } from "@/public/assets/icons";

import ImageNotice from "./ImageNotice";
import ProductTitle from "./ProductTitle";
import ModalTotal from "./ModalTotal";

interface ModalLeftContentProps {
  setModalHeight: React.Dispatch<React.SetStateAction<number>>;
}

const ModalLeftContent: React.FC<ModalLeftContentProps> = ({
  setModalHeight,
}) => {
  const { selectedProduct } = useAppSelector(state => state.menuReducer);

  const modalLeft = useRef<HTMLDivElement>(null);

  // Function to get the height of the modal left content
  const getModalHeight = useCallback(() => {
    if (modalLeft.current) {
      const height = modalLeft.current.clientHeight;
      setModalHeight(height);
    }
  }, [modalLeft, setModalHeight]);

  useEffect(() => {
    getModalHeight();
  }, [getModalHeight]);

  return (
    <div className="fill flex_between flex-col gap-[30px]" ref={modalLeft}>
      <div className="hidden sm:block">
        <ProductTitle />
      </div>
      <div className="relative flex_center flex-col gap-[30px] sm:gap-0 w-full">
        <Image
          src={selectedProduct?.image || "Картинка не загрузилась"}
          alt={selectedProduct?.title || "😢"}
          width={325}
          height={325}
        />
        <div className="absolute top-0 right-0 cursor-pointer">
          <HeartIcon />
        </div>
        <ImageNotice />
        <p className="block text-center text-sm sm:text-[0.75rem] sm:mb-[30px] leading-[1.25rem]">
          {selectedProduct?.ingredients}
        </p>
      </div>
      <div className="sm:hidden max-w-[236px] w-full">
        <ModalTotal />
      </div>
    </div>
  );
};

export default ModalLeftContent
