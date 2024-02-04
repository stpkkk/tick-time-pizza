'use client';

import React from 'react';
import Link from 'next/link';
import HeaderCartItem from './HeaderCartItem';
import { useAppSelector } from '@/redux/hooks';

interface CartTooltipProps {
  cartTooltipRef: React.MutableRefObject<HTMLDivElement | null>;
}

const CartTooltip: React.FC<CartTooltipProps> = ({ cartTooltipRef }) => {
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const isCartEmpty = cartProducts.length === 0;

  return (
    <div className='right-0 header_tooltip' ref={cartTooltipRef}>
      {isCartEmpty ? (
        <div className='mb-4'>
          <span className='text-start'>Корзина пока пуста</span>
        </div>
      ) : (
        <ul className='scroll-container -mr-2 mb-[30px] flex max-h-[222px] flex-col gap-4 overflow-auto pr-2 thin_scroll md:mb-4'>
          {cartProducts.map((product) => (
            <li key={product.uuid}>
              <HeaderCartItem product={product} />
            </li>
          ))}
        </ul>
      )}
      <Link href='/cart'>
        <button className='btn_red'>Перейти в корзину</button>
      </Link>
    </div>
  );
};

export default CartTooltip;
