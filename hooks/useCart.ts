'use client';

import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { addToCart, useAppDispatch, useAppSelector } from '@/redux';
import { IProduct } from '@/types';

export const useCart = (id?: string) => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(
    (state) => state.menuReducer.cartProducts,
  );
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  useEffect(() => {
    if (cartProductInLS) {
      dispatch(addToCart(cartProductInLS));
    }
  }, [dispatch, cartProductInLS]);

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const modifyCartItem = (modifier: (product: IProduct) => IProduct) => {
    const updatedItems = cartProducts.map((product) =>
      product.uuid === id ? modifier(product) : product,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  const handleIncrement = () => {
    modifyCartItem((product) => ({
      ...product,
      productQuantity: (product.productQuantity || 1) + 1,
    }));
  };

  const handleDecrement = () => {
    modifyCartItem((product) => ({
      ...product,
      productQuantity:
        product.productQuantity && product.productQuantity > 1
          ? product.productQuantity - 1
          : 1,
    }));
  };

  const handleRemove = () => {
    const updatedItems = cartProducts.filter(
      (product: IProduct) => product.uuid !== id,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  return { cartProducts, handleDecrement, handleIncrement, handleRemove };
};
