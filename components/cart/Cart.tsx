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
      const parsedItems = JSON.parse(storedItems) as IProduct[];
      dispatch(addToCart(parsedItems));
    }
  }, [dispatch]);

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const modifyCartItem = (
    productId: number,
    modifier: (product: IProduct) => IProduct,
  ) => {
    const updatedItems = cartProducts.map((product) =>
      product.id === productId ? modifier(product) : product,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  const handleIncrement = (productId: number) => {
    modifyCartItem(productId, (product) => ({
      ...product,
      productAmount: (product.productAmount || 1) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    modifyCartItem(productId, (product) => ({
      ...product,
      productAmount:
        product.productAmount && product.productAmount > 1
          ? product.productAmount - 1
          : 1,
    }));
  };

  const removeItem = (productId: number) => {
    const updatedItems = cartProducts.filter(
      (product) => product.id !== productId,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className='flex sm:flex-col flex-row gap-[30px] w-full'>
      <div className='md:max-w-full w-full max-w-[calc(100%-420px)]'>
        {cartProducts.length > 0 ? (
          <ul className='flex flex-col gap-[30px] py-[50px] px-[60px] sm:py-8 sm:px-4 rounded-2xl drop-shadow-custom bg-white'>
            {cartProducts.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                onIncrement={() => handleIncrement(product.id)}
                onDecrement={() => handleDecrement(product.id)}
                onRemove={() => removeItem(product.id)}
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
