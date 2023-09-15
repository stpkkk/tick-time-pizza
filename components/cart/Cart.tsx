'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/features/menuSlice';

import CartProduct from './CartProduct';
import EmptyCart from './EmptyCart';
import { IProduct } from '@/types';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(
    (state) => state.menuReducer.cartProducts,
  );

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      dispatch(addToCart(parsedItems));
    }
  }, [dispatch]);

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const modifyCartItem = (
    productUUID: number,
    modifier: (product: IProduct) => IProduct
  ) => {
    const updatedItems = cartProducts.map(product =>
      product.uuid === productUUID ? modifier(product) : product
    );
    updateItemsInLocalStorage(updatedItems);
  };

  const handleIncrement = (productUUID: number) => {
    modifyCartItem(productUUID, (product) => ({
      ...product,
      productQuantity: (product.productQuantity || 1) + 1,
    }));
  };

  const handleDecrement = (productUUID: number) => {
    modifyCartItem(productUUID, (product) => ({
      ...product,
      productQuantity:
        product.productQuantity && product.productQuantity > 1
          ? product.productQuantity - 1
          : 1,
    }));
  };

  const removeItem = (productUUID: number) => {
    const updatedItems = cartProducts.filter(
      product => product.uuid !== productUUID
    );
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className='flex sm:flex-col flex-row gap-[30px] w-full'>
      <div className='md:max-w-full w-full max-w-[calc(100%-420px)]'>
        {cartProducts.length > 0 ? (
          <ul className='flex flex-col gap-[30px] py-[50px] px-[60px] sm:py-8 sm:px-4 rounded-2xl drop-shadow-custom bg-white'>
            {cartProducts.map(product => (
              <CartProduct
                key={product.uuid}
                product={product}
                onIncrement={() => handleIncrement(product?.uuid || 0)}
                onDecrement={() => handleDecrement(product?.uuid || 0)}
                onRemove={() => removeItem(product?.uuid || 0)}
              />
            ))}
          </ul>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
