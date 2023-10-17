'use client';

import React, { MutableRefObject } from 'react';
import Link from 'next/link';
import HeaderCartItem from './HeaderCartItem';
import { addToCart } from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IProduct } from '@/types';

interface CartTooltipProps {
  products: IProduct[];
  cartTooltipRef: MutableRefObject<HTMLDivElement | null>;
}

const CartTooltip: React.FC<CartTooltipProps> = ({
  products,
  cartTooltipRef,
}) => {
  const dispatch = useAppDispatch();
  const isCartEmpty = products.length === 0;

  const updateItemsInLocalStorage = (updatedItems: IProduct[]) => {
    dispatch(addToCart(updatedItems));
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const onRemove = (productUUID: string) => {
    const updatedItems = products.filter(
      (product) => product.uuid !== productUUID,
    );
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className='header_tooltip right-0' ref={cartTooltipRef}>
      {isCartEmpty ? (
        <div className='mb-4'>
          <span className='text-start'>Корзина пока пуста</span>
        </div>
      ) : (
        <ul className='scroll-container -mr-2 mb-[30px] flex max-h-[222px] flex-col gap-4 overflow-auto pr-2 thin_scroll md:mb-4'>
          {products.map((product) => (
            <li key={product.uuid}>
              <HeaderCartItem product={product} onRemove={onRemove} />
            </li>
          ))}
        </ul>
      )}
      <Link href='/cart' as='cart'>
        <button className='btn_red'>Перейти в корзину</button>
      </Link>
    </div>
  );
};

export default CartTooltip;
