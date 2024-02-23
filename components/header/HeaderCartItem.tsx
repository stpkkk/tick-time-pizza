import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SelectedProductOptions } from '../common';
import { addToCart } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';
import { calculateProductPrices } from '@/utils';

interface HeaderCartItemProps {
  product: IProduct;
}

const HeaderCartItem: React.FC<HeaderCartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const { totalProductPrice } = calculateProductPrices(
    product,
    product.selectedSize || null,
    product.selectedIngredients || [],
    product.productQuantity || 1,
  );

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const onRemove = (productUUID?: string) => {
    const updatedItems = cartProducts.filter(
      (product) => product.uuid !== productUUID,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className='flex flex-row items-start gap-2'>
      <SelectedProductOptions product={product} />
      <div className='flex gap-3'>
        <p className='whitespace-nowrap text-[14px] md:text-sm'>
          {`${product.productQuantity} шт.`}
        </p>
        <p className='w-10 whitespace-nowrap text-center text-[14px] font-semibold md:w-16 md:text-sm mr-auto'>
          {`${totalProductPrice} ₽`}
        </p>
        <button type='button' onClick={() => onRemove(product.uuid)}>
          <RiDeleteBin6Line
            size={15}
            className='text-grayDark hover:text-primary animate-fade-in cursor-pointer'
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderCartItem;
