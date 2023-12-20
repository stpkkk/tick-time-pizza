import React from 'react';
import Image from 'next/image';
import pizza from '../../public/assets/icons/pizza.svg';
import { ButtonBookmark, Notice } from '../common';
import ModalTotal from './ModalTotal';
import ProductIngredients from './ProductIngredients';
import ProductTitle from './ProductTitle';
import { setModalHeight } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ContentLeft: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, selectedPromo } = useAppSelector(
    (state) => state.menuReducer,
  );
  const modalLeft = React.useRef<HTMLDivElement>(null);

  // Function to get the height of the modal left content
  const getModalHeight = React.useCallback(() => {
    if (modalLeft.current) {
      const height = modalLeft.current.clientHeight;
      dispatch(setModalHeight(height));
    }
  }, [modalLeft, dispatch]);

  React.useEffect(() => {
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
          <ButtonBookmark product={selectedProduct} />
        </div>
        <div className='absolute left-0 top-0 w-full'>
          <Notice text='Изображение в рекламе и внешний вид продукта могут отличаться' />
        </div>
        {selectedProduct?.additionalIngredients && !selectedPromo ? (
          <div className='text-center'>
            <ProductIngredients />
          </div>
        ) : null}
      </div>
      <div className='w-full max-w-[236px] sm:hidden'>
        <ModalTotal />
      </div>
    </div>
  );
};

export default ContentLeft;
