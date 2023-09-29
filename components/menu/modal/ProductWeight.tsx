import React from 'react';
import { useAppSelector } from '@/redux/hooks';

const ProductWeight: React.FC = () => {
  const { selectedProduct, selectedSize, selectedDough } = useAppSelector(
    (state) => state.menuReducer,
  );
  const thinDough = 'Тонкое';

  const getWeightBySize = () => {
    return (
      selectedProduct?.weights &&
      selectedProduct?.weights.find((item) => item.id === selectedSize?.id)
    );
  };

  const getWeightByDough = () => {
    const isThinDough = selectedDough?.name === thinDough;
    return isThinDough
      ? selectedProduct?.weights && selectedProduct?.weights.slice(-2)
      : selectedProduct?.weights && selectedProduct?.weights.slice(0, 1);
  };

  const getTotalWeight = () => {
    const weightBySize = getWeightBySize();
    const weightByDough = getWeightByDough();

    if (!selectedDough || !selectedProduct || !weightBySize || !weightByDough) {
      return null;
    }

    if (selectedDough.name === thinDough && selectedProduct.sizes) {
      const selectedSizeIndex = selectedProduct.sizes.findIndex(
        (_, i) => i + 1 === selectedSize?.id,
      );
      return weightByDough[selectedSizeIndex]?.weight;
    } else {
      return weightBySize.weight;
    }
  };

  return (
    <div>
      <span className='mb-5 text-base font-bold leading-5 md:mb-4 md:text-sm md:leading-[15px]'>
        Вес:&nbsp;
      </span>
      <span>
        {getTotalWeight() ||
          (selectedProduct?.weights && selectedProduct?.weights[0].weight)}{' '}
        г
      </span>
    </div>
  );
};

export default ProductWeight;
