"use client";
import React, { useEffect, useState, useRef } from "react"
import { toggleModal } from "@/redux/features/menuSlice";
import { useAppDispatch } from "@/redux/hooks"
import { RiCloseFill } from "react-icons/ri";

import LeftModalContent from './LeftModalContent'
import RightModalContent from './RightModalContent'

const Modal: React.FC = () => {
	const dispatch = useAppDispatch();
	const modalRef = useRef<HTMLDivElement>(null);
  const [modalHeight, setModalHeight] = useState<number>(0);

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
							<LeftModalContent setModalHeight={setModalHeight} />
							<RightModalContent modalHeight={modalHeight} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
