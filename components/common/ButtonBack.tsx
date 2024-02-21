'use client';

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const ButtonBack: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className='text-grayDark hover:text-primary animate-fade-in flex items-center text-sm font-semibold'
      type='button'
      onClick={() => router.back()}
    >
      <FiArrowLeft size={30} />
    </button>
  );
};

export default ButtonBack;
