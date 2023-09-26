import React from 'react';
import { useAppSelector } from '@/redux/hooks';

import ProductSizeSelection from './ProductSizeSelection';
import IngredientsSelect from './IngredientsSelect';
import IngredientsRemove from './IngredientsRemove';
import NutritionalValue from './NutritionalValue';
import ProductTitle from './ProductTitle';
import ProductWeight from './ProductWeight';

type ModalRightContentProps = {
  modalHeight: number;
};

const ModalRightContent: React.FC<ModalRightContentProps> = ({
  modalHeight,
}) => {
  const { selectedProduct } = useAppSelector((state) => state.menuReducer);

  return (
    <div
      className={`modal_mobile_height scroll scroll-container flex flex-col gap-[30px] overflow-auto pr-[50px] modal_scroll sm:overflow-visible sm:pr-0`}
      style={{
        height: `${modalHeight}px`,
      }}
    >
      <div className='sm:hidden'>
        <ProductTitle />
      </div>
      <ProductWeight />
      {selectedProduct?.sizes && selectedProduct?.dough && (
        <ProductSizeSelection />
      )}
      {selectedProduct?.additionalIngredients?.length === 0 || (
        <p className='block text-sm leading-[1.25rem] sm:mb-[30px] sm:text-[0.75rem]'>
          {selectedProduct?.ingredients}
        </p>
      )}
      <IngredientsSelect />
      <IngredientsRemove />
      {selectedProduct?.nutritionalValues && <NutritionalValue />}
    </div>
  );
};

export default ModalRightContent;
