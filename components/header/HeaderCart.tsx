'use client';

import React from 'react';
import { BsBasket2 } from 'react-icons/bs';
import Link from 'next/link';
import CartTooltip from './CartTooltip';
import { setIsHoveringCart } from '@/redux/features/headerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';
import { calculateTotalPrice } from '@/utils';

const HeaderCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const { isHoveringCart } = useAppSelector((state) => state.headerReducer);

  const cartTooltipRef = React.useRef<HTMLDivElement | null>(null);
  const cartTotalPrice = calculateTotalPrice(cartProducts).totalPrice;
  const totalQuantity = cartProducts
    .map((product: IProduct) => product.productQuantity || 0)
    .reduce((quantity: number, acc: number) => quantity + acc, 0);

  const handleMouseOverCart = () => {
    dispatch(setIsHoveringCart(true));
  };

  const handleMouseOutCart = (e: React.MouseEvent<HTMLDivElement>) => {
    const isHoveringTooltip =
      cartTooltipRef.current &&
      cartTooltipRef.current.contains(e.relatedTarget as Node);

    if (!isHoveringTooltip) {
      dispatch(setIsHoveringCart(false));
    }
  };

  return (
    <div
      className='relative h-full hover:bg-grayLight sm:hover:bg-white'
      onMouseOver={handleMouseOverCart}
      onMouseOut={handleMouseOutCart}
    >
      <Link
        href='/cart'
        className='flex_center h-full w-[6rem] flex-col gap-2 sm:flex-row-reverse'
      >
        <BsBasket2 size={30} />
        <div className='text-sm font-semibold'>
          {cartTotalPrice <= 0 ? (
            <span className='sm:hidden'>Корзина</span>
          ) : (
            `${cartTotalPrice} ₽`
          )}
        </div>
        {totalQuantity ? (
          <span className='header_total_quantity right-6 md:-right-1 top-4'>
            {totalQuantity}
          </span>
        ) : null}
      </Link>
      <div className='sm:hidden'>
        {isHoveringCart ? (
          <CartTooltip
            products={cartProducts}
            cartTooltipRef={cartTooltipRef}
          />
        ) : null}
      </div>
    </div>
  );
};

export default HeaderCart;
