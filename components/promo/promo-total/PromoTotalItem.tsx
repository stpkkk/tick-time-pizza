import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Counter } from '../../common';
import {
  useAppDispatch,
  useAppSelector,
  incrementPromoProductQuantity,
  decrementPromoProductQuantity,
  removeFromPromoProducts,
} from '@/redux';
import { IProduct } from '@/types';

type PromoTotalItemProps = {
  product: IProduct;
  totalPromoProducts: number;
};

const PromoTotalItem: React.FC<PromoTotalItemProps> = ({
  product,
  totalPromoProducts,
}) => {
  const dispatch = useAppDispatch();
  const { selectedPromo, productQuantity } = useAppSelector(
    (state) => state.menuReducer,
  );

  const handleIncrement = () => {
    if (
      product.productQuantity &&
      product?.productQuantity < (selectedPromo?.maxValue || 99) &&
      totalPromoProducts < (selectedPromo?.maxValue || 99)
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
    dispatch(removeFromPromoProducts(productUUID));
  };

  return (
    <>
      <div className='md:gap-4 flex items-start flex-none gap-5'>
        <div className='mr-auto'>
          <span className='md:text-sm block text-xs font-semibold leading-4 break-words'>
            {product.title}
          </span>
          <p className='md:text-xs text-[0.625rem] leading-[0.75rem] mt-2.5'>
            {product.selectedSize?.value}, {product.selectedDough?.value}
          </p>
        </div>
        <button
          className='flex_start gap-5'
          type='button'
          onClick={() => removeItem(product?.uuid || '')}
        >
          <RiDeleteBin6Line
            size={15}
            className='text-grayDark hover:text-primary animate-fade-in cursor-pointer'
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
