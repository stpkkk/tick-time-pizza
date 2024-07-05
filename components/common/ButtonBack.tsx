'use client';

import React, { ReactNode } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface ButtonBackProps {
  children: ReactNode;
}

const BUTTON_BACK =
  'text-primary hover:text-grayDark animate-fade-in flex items-center text-sm font-semibold';

const ButtonBack: React.FC<ButtonBackProps> = ({ children }) => {
  const router = useRouter();

  return (
    <button className={BUTTON_BACK} type='button' onClick={() => router.back()}>
      <FiArrowLeft size={30} />
      {children}
    </button>
  );
};

export default ButtonBack;
