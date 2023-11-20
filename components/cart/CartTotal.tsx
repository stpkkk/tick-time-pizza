import React from 'react';
import Promocode from './Promocode';
import { useAppSelector } from '@/redux/hooks';
import { calculateTotalPrice } from '@/utils';

const CartTotal: React.FC = () => {
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const cartTotalPrice = calculateTotalPrice(cartProducts).totalPrice;
  const totalProducts = cartProducts.reduce(
    (acc, product) => acc + (product.productQuantity ?? 0),
    0,
  );
  const discount = cartProducts.reduce(
    (acc, product) =>
      acc +
      (product?.discount ?? 0) *
        ((product?.productQuantity && product?.productQuantity) || 0),
    0,
  );

  return (
    <div className='flex_center flex-none flex-wrap w-[390px] h-[443px] md:w-full drop-shadow-custom rounded-2xl sm:py-8 py-[50px] px-[60px] sm:px-4 bg-white'>
      <div className='flex flex-col gap-[30px]'>
        <Promocode />
        <div>
          <span className='flex justify-between text-xl font-bold mb-4'>
            Сумма заказа:
            <span className='whitespace-nowrap'>{cartTotalPrice} ₽</span>
          </span>
          <p className='flex justify-between sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-normal mb-2.5'>
            {totalProducts} товаров
            <span className='whitespace-nowrap'>{cartTotalPrice} ₽</span>
          </p>
          <p className='flex justify-between sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-normal'>
            Скидка<span className='whitespace-nowrap'>{discount} ₽</span>
          </p>
        </div>
        <button
          type='button'
          className='btn_red btn_disabled w-full h-[60px]'
          disabled={cartTotalPrice > 0 ? false : true}
        >
          Оформить заказ
        </button>
        <p className='text-[0.645rem] leading-[15px]'>
          С условиями оферты и политикой конфиденциальности можно ознакомиться,
          перейдя по этой{' '}
          <a target='_blank' className='underline' href='/legal'>
            ссылке
          </a>
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
