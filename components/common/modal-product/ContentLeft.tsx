import React from 'react';
import Image from 'next/image';
import { ButtonBookmark, Notice } from '..';
import ModalTotal from './ModalTotal';
import ProductIngredients from './ProductIngredients';
import ProductTitle from './ProductTitle';
import pizza from '@/public/assets/icons/pizza.svg';
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
      <div className='sm:block hidden'>
        <ProductTitle />
      </div>
      <div className='flex_center relative w-full flex-col gap-[30px] sm:gap-0'>
        <div className='relative w-full max-w-[325px] sm:max-w-[250px] aspect-square cursor-pointer'>
          <Image
            src={selectedProduct?.image || ''}
            alt={selectedProduct?.title || ''}
            placeholder='blur'
            blurDataURL={pizza.src}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
            priority
            className='rounded-2xl'
          />
        </div>
        {selectedProduct && (
          <div className='absolute top-0 right-0'>
            <ButtonBookmark product={selectedProduct} />
          </div>
        )}
        <div className='absolute top-0 left-0 sm:w-[172px] w-[296px]'>
          <Notice>
            <p className='text-[12px] leading-[15px]'>
              Изображение в рекламе и внешний вид продукта могут отличаться.
              Допустимое отклонение от заявленного размера ≈ 1 см.
            </p>
          </Notice>
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
