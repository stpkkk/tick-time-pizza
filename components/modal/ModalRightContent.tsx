import React from 'react';
import Image from 'next/image';
import IngredientsRemove from './IngredientsRemove';
import IngredientsSelect from './IngredientsSelect';
import NutritionalValue from './NutritionalValue';
import ProductSizeSelection from './ProductSizeSelection';
import ProductTitle from './ProductTitle';
import ProductWeight from './ProductWeight';
import { useAppSelector } from '@/redux/hooks';

type ModalRightContentProps = {
  modalHeight: number;
};

const ModalRightContent: React.FC<ModalRightContentProps> = ({
  modalHeight,
}) => {
  const { selectedProduct, selectedPromo } = useAppSelector(
    (state) => state.menuReducer,
  );

  return (
    <div
      className={`modal_mobile_height scroll scroll-container flex flex-col gap-[30px] overflow-auto pr-[50px] modal_scroll sm:overflow-visible sm:pr-0`}
      style={{
        height: `${modalHeight}px`,
      }}
    >
      {!selectedPromo && (
        <ul
          className={`${
            selectedProduct?.categories ? 'block' : 'hidden'
          } flex items-center gap-4 sm:justify-center`}
        >
          {selectedProduct?.categories &&
            selectedProduct?.categories.map((cat) => (
              <li className='flex_center gap-2' key={cat.id}>
                <Image
                  src={cat.image || ''}
                  alt={cat.title}
                  className='h-auto w-5'
                />
                <span className='text-[0.75rem] font-bold md:text-xs md:leading-[15px]'>
                  {cat.title}
                </span>
              </li>
            ))}
        </ul>
      )}
      <div className='sm:hidden'>
        <ProductTitle />
      </div>
      {selectedPromo && (
        <p className='block text-sm leading-[1.25rem] sm:mb-[30px] sm:text-[0.75rem]'>
          {selectedProduct?.ingredients}
        </p>
      )}
      <ProductWeight />
      {selectedProduct?.sizes && selectedProduct?.dough && (
        <ProductSizeSelection />
      )}
      {(selectedProduct?.additionalIngredients &&
        selectedProduct?.additionalIngredients?.length >= 0) || (
        <p className='block text-sm leading-[1.25rem] sm:mb-[30px] sm:text-[0.75rem]'>
          {selectedProduct?.ingredients}
        </p>
      )}
      {!selectedPromo && <IngredientsSelect />}
      {!selectedPromo && <IngredientsRemove />}
      {!selectedPromo && selectedProduct?.nutritionalValues && (
        <NutritionalValue />
      )}
    </div>
  );
};

export default ModalRightContent;
