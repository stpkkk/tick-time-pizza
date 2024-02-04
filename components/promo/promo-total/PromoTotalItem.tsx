import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Counter } from '../../common';
import {
  decrementPromoProductQuantity,
  incrementPromoProductQuantity,
  removePromoProductsList,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

type PromoTotalItemProps = {
  product: IProduct;
  totalPromoProductsQuantity: number;
};

const PromoTotalItem: React.FC<PromoTotalItemProps> = ({
  product,
  totalPromoProductsQuantity,
}) => {
  const dispatch = useAppDispatch();
  const { selectedPromo, productQuantity } = useAppSelector(
    (state) => state.menuReducer,
  );

  const handleIncrement = () => {
    if (
      product.productQuantity &&
      product?.productQuantity < (selectedPromo?.maxValue || 99) &&
      totalPromoProductsQuantity < (selectedPromo?.maxValue || 99)
    ) {
      dispatch(incrementPromoProductQuantity({ product }));
    }
  };

  const handleDecrement = () => {
    if (productQuantity > 0) {
      dispatch(decrementPromoProductQuantity({ product }));
    }
  };

  const removeItem = (productUUID: string) => {
    dispatch(removePromoProductsList(productUUID));
  };

  return (
    <>
      <div className='flex items-start flex-none gap-5 md:gap-4'>
        <div className='mr-auto'>
          <span className='block text-xs font-semibold leading-4 break-words md:text-sm'>
            {product.title}
          </span>
          <p className='md:text-xs text-[0.625rem] leading-[0.75rem] mt-2.5'>
            {product.selectedSize?.value}, {product.selectedDough?.value}
          </p>
        </div>
        <button
          className='gap-5 flex_start'
          type='button'
          onClick={() => removeItem(product?.uuid || '')}
        >
          <RiDeleteBin6Line
            size={15}
            className='cursor-pointer text-grayDark hover:text-primary'
          />
        </button>
      </div>
      <div className='flex_between w-full max-w-[105px] text-base sm:max-w-[96px]'>
        <Counter
          minValue={1}
          maxValue={selectedPromo?.maxValue}
          initialValue={1}
          value={product.productQuantity || 1}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
    </>
  );
};

export default PromoTotalItem;
