'use client';

import React from 'react';
import { SelectedProductOptions } from '../common';
import AddressView from './AddressView';
import OrderComment from './OrderComment';
import Tickets from './Tickets';
import { useLocalStorage } from '@/hooks';
import { useAppSelector } from '@/redux/hooks';
import { IProduct, Supply } from '@/types';
import { calculateTotalPrice } from '@/utils';

type OrderSummaryProps = {
  ticketsToAdd: number;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ ticketsToAdd }) => {
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const { orderFormData } = useAppSelector((state) => state.profileReducer);
  const { promoDiscount, cartProducts } = useAppSelector(
    (state) => state.menuReducer,
  );
  const { supplyMethod, deliveryAddress, pickPoint, ticketsToUse } =
    orderFormData;
  const isDelivery = supplyMethod === Supply.DELIVERY;
  const orderPrice =
    calculateTotalPrice(cartProductInLS).totalPrice - (ticketsToUse || 0);

  return (
    <section>
      <h2 className='h1 md:my-4 md:ml-4 flex flex-row gap-2 my-10 ml-6'>
        Ваш заказ
      </h2>
      <div className='container grid grid-cols-2 sm:grid-cols-1 gap-[30px] flex-wrap w-full px-[60px] py-[50px] sm:px-4 sm:py-8 '>
        <div className='flex flex-col gap-[30px] sm:gap-4 sm:w-full'>
          <div>
            <h3 className='h3 mb-4'>
              {isDelivery ? Supply.DELIVERY : Supply.PICKUP}
            </h3>
            {isDelivery ? (
              <AddressView address={deliveryAddress} />
            ) : (
              <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
                {pickPoint}
              </span>
            )}
          </div>
          <div>
            <h2 className='h3 mb-4'>Состав заказа</h2>
            <ul>
              {cartProducts.map((product: IProduct) => (
                <li
                  key={product.uuid}
                  className='flex sm:gap-4 gap-[30px] w-full'
                >
                  <SelectedProductOptions product={product} />
                  <div className='flex justify-between w-1/3 gap-6'>
                    <div className='whitespace-nowrap self-start'>
                      {product.productQuantity} шт.
                    </div>
                    <div className='whitespace-nowrap font-bold'>
                      {product.totalPrice} ₽
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-[30px] basis-1/2 sm:w-full'>
          <OrderComment />
          <Tickets />
          <div>
            <p className='font-bold md:text-xl leading-5 text-3xl mb-5 sm:mb-2.5'>
              К оплате: {orderPrice} ₽
            </p>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold mb-5 sm:mb-2.5'>
              Тикетов будет начислено: {ticketsToAdd}
            </p>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold'>
              Скидка: {promoDiscount} ₽
            </p>
          </div>
          <div className='sm:gap-4 sm:flex-col flex justify-between gap-6'>
            <button className='btn_red max-w-[235px]' type='submit'>
              Заказать
            </button>
            <p className='sm:text-xs text-sm italic md:max-w-[340px]'>
              С условиями оферты и политикой конфиденциальности можно
              ознакомиться, перейдя по этой{' '}
              <a target='_blank' className='underline' href='/legal'>
                ссылке
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
