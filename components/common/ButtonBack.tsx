'use client';

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const ButtonBack: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className='flex items-center text-sm font-semibold text-grayDark hover:text-primary'
      type='button'
      onClick={() => router.back()}
    >
      <FiArrowLeft size={30} />
    </button>
  );
};

export default ButtonBack;
