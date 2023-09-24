'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';

import { BookmarkButton } from '@/components/common';
import pizza from '../../../public/assets/icons/pizza.svg';
import ImageNotice from './ImageNotice';
import ProductTitle from './ProductTitle';
import ModalTotal from './ModalTotal';

interface ModalLeftContentProps {
  setModalHeight: React.Dispatch<React.SetStateAction<number>>;
}

const ModalLeftContent: React.FC<ModalLeftContentProps> = ({
  setModalHeight,
}) => {
  const { selectedProduct } = useAppSelector((state) => state.menuReducer);

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
    <div className='flex_between flex-col gap-[30px]' ref={modalLeft}>
      <div className='hidden sm:block'>
        <ProductTitle />
      </div>
      <div className='flex_center relative w-full flex-col gap-[30px] sm:gap-0'>
        <Image
          src={selectedProduct?.image || ''}
          alt={selectedProduct?.title || ''}
          placeholder='blur'
          blurDataURL={pizza.src}
          width={325}
          height={325}
          className='aspect-square h-full max-h-[325px] w-full max-w-[325px] sm:max-h-[250px] sm:max-w-[250px]'
        />
        <div className='absolute right-0 top-0'>
          <BookmarkButton product={selectedProduct} />
        </div>
        <ImageNotice />
        <p className='block text-center text-sm leading-[1.25rem] sm:mb-[30px] sm:text-[0.75rem]'>
          {selectedProduct?.ingredients}
        </p>
      </div>
      <div className='w-full max-w-[236px] sm:hidden'>
        <ModalTotal />
      </div>
    </div>
  );
};

export default ModalLeftContent;
