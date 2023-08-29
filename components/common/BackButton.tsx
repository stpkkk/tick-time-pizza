"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center font-semibold text-sm text-grayDark hover:text-primary"
      type="button"
      onClick={() => router.back()}
    >
      <FiArrowLeft size={30} />
    </button>
  );
};

export default BackButton;
