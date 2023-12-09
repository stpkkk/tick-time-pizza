import React from 'react';
import IngredientsRemove from './IngredientsRemove';
import IngredientsSelect from './IngredientsSelect';
import ModalCategories from './ModalCategories';
import NutritionalValue from './NutritionalValue';
import ProductIngredients from './ProductIngredients';
import ProductSizeSelection from './ProductSizeSelection';
import ProductTitle from './ProductTitle';
import ProductWeight from './ProductWeight';
import { useAppSelector } from '@/redux/hooks';

const ModalRightContent: React.FC = () => {
  const { selectedProduct, selectedPromo, modalHeight } = useAppSelector(
    (state) => state.menuReducer,
  );

  return (
    <div
      className={`modal_mobile_height scroll scroll-container flex flex-col gap-[30px] sm:gap-4 overflow-auto pr-[50px] modal_scroll sm:overflow-visible sm:pr-0`}
      style={{
        height: `${modalHeight}px`,
      }}
    >
      {!selectedPromo && <ModalCategories />}
      <div className='sm:hidden'>
        <ProductTitle />
      </div>
      {selectedPromo && <ProductIngredients />}
      <ProductWeight />
      {selectedProduct?.sizes && selectedProduct?.dough && (
        <ProductSizeSelection />
      )}
      {(selectedProduct?.additionalIngredients &&
        selectedProduct?.additionalIngredients?.length >= 0) || (
        <ProductIngredients />
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
