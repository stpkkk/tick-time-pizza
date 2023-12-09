'use client';

import React from 'react';
import CartProduct from './CartProduct';
import EmptyCart from './EmptyCart';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(
    (state) => state.menuReducer.cartProducts,
  );
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  React.useEffect(() => {
    if (cartProductInLS) {
      dispatch(addToCart(cartProductInLS));
    }
  }, [dispatch, cartProductInLS]);

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const modifyCartItem = (
    productUUID: string,
    modifier: (product: IProduct) => IProduct,
  ) => {
    const updatedItems = cartProducts.map((product: IProduct) =>
      product.uuid === productUUID ? modifier(product) : product,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  const handleIncrement = (productUUID: string) => {
    modifyCartItem(productUUID, (product) => ({
      ...product,
      productQuantity: (product.productQuantity || 1) + 1,
    }));
  };

  const handleDecrement = (productUUID: string) => {
    modifyCartItem(productUUID, (product) => ({
      ...product,
      productQuantity:
        product.productQuantity && product.productQuantity > 1
          ? product.productQuantity - 1
          : 1,
    }));
  };

  const removeItem = (productUUID: string) => {
    const updatedItems = cartProducts.filter(
      (product: IProduct) => product.uuid !== productUUID,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className='flex w-full flex-row gap-[30px] sm:flex-col'>
      <div className='w-full md:max-w-full'>
        {cartProducts.length > 0 ? (
          <ul className='container flex flex-col gap-[30px] px-[60px] py-[50px] sm:px-4 sm:py-8'>
            {cartProducts.map((product: IProduct) => (
              <CartProduct
                key={product.uuid}
                product={product}
                onIncrement={() => handleIncrement(product?.uuid || '')}
                onDecrement={() => handleDecrement(product?.uuid || '')}
                onRemove={() => removeItem(product?.uuid || '')}
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
