'use client';
import React, { MutableRefObject, useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/menuSlice';

import HeaderCartItem from './HeaderCartItem';
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

  const onRemove = (productId: number) => {
    const updatedItems = products.filter((product) => product.id !== productId);
    updateItemsInLocalStorage(updatedItems);
  };

  return (
    <div className='right-0 header_tooltip' ref={cartTooltipRef}>
      {isCartEmpty ? (
        <div className='mb-4'>
          <span className='text-start'>Корзина пока пуста</span>
        </div>
      ) : (
        <ul className='max-h-[222px] scroll-container thin_scroll overflow-auto md:mb-4 mb-[30px] flex flex-col gap-4 pr-2 -mr-2'>
          {products.map((product) => (
            <li key={product.id}>
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
