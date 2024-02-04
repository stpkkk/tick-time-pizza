import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Dough } from '@/types';

const ProductWeight: React.FC = () => {
  const { selectedProduct, selectedSize, selectedDough } = useAppSelector(
    (state) => state.menuReducer,
  );

  const getWeightBySize = () => {
    return (
      selectedProduct?.weight &&
      selectedProduct?.weight.find((item) => item.id === selectedSize?.id)
    );
  };

  const getWeightByDough = () => {
    const isThinDough = selectedDough?.value === Dough.THIN;
    return isThinDough
      ? selectedProduct?.weight && selectedProduct?.weight.slice(-2)
      : selectedProduct?.weight && selectedProduct?.weight.slice(0, 1);
  };

  const getTotalWeight = () => {
    const weightBySize = getWeightBySize();
    const weightByDough = getWeightByDough();

    if (!selectedDough || !selectedProduct || !weightBySize || !weightByDough) {
      return null;
    }

    if (selectedDough.value === Dough.THIN && selectedProduct.sizes) {
      const selectedSizeIndex = selectedProduct.sizes.findIndex(
        (_, i) => i + 1 === selectedSize?.id,
      );
      return weightByDough[selectedSizeIndex]?.value;
    } else {
      return weightBySize.value;
    }
  };

  return (
    <div>
      <span className='mb-5 text-base font-bold leading-5 md:mb-4 md:text-sm md:leading-[15px]'>
        Вес:&nbsp;
      </span>
      <span>
        {getTotalWeight() ||
          (selectedProduct?.weight && selectedProduct?.weight[0].value)}{' '}
        г
      </span>
    </div>
  );
};

export default ProductWeight;
