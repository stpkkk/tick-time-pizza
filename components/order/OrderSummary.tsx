'use client';

import React from 'react';
import { SelectedProductOptions } from '../common';
import { useLocalStorage } from '@/hooks';
import { useAppSelector } from '@/redux/hooks';
import { IProduct, Supply } from '@/types';

const OrderSummary: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const { orderFormData } = useAppSelector((state) => state.profileReducer);

  const isDelivery = orderFormData.supplyMethod === Supply.DELIVERY;

  return (
    <section>
      <h2 className='h1 my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        Ваш заказ
      </h2>
      <div className='container flex justify-between flex-wrap w-full px-[60px] py-[50px] sm:px-4 sm:py-8 '>
        <div className='flex flex-col gap-[30px] w-1/2 sm:w-full'>
          <div>
            <h3 className='h3 mb-4'>
              {isDelivery ? Supply.DELIVERY : Supply.PICKUP}
            </h3>
            <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              {isDelivery ? 'Выберите адрес доставки' : orderFormData.pickPoint}
            </span>
          </div>
          <div>
            <h2 className='h3 mb-4'>Состав заказа</h2>
            <ul>
              {userInLS?.orders?.at(-1).products?.map((product: IProduct) => (
                <li
                  key={product.uuid}
                  className='grid grid-cols-3 justify-items-center w-full'
                >
                  <SelectedProductOptions product={product} />
                  <div>{product.productQuantity} шт.</div>
                  <div className='font-bold'>{product.totalPrice} ₽</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-[30px] w-1/2 sm:w-full'>
          <div>
            <h3 className='h3 mb-4'>Комментарий к заказу</h3>
            <textarea
              className='block px-6 sm:py-4 py-[21px] w-full sm:text-xs text-sm leading-4 sm:leading-[15px] font-semibold bg-transparent rounded-2xl border border-primary border-solid appearance-none focus:outline-none focus:ring-0 focus:border-accent disabled:border-dark-light peer resize-none'
              name='comment'
              id='comment'
              rows={5}
            />
          </div>
          <div>
            <h3 className='h3 mb-4'>Использовать тикеты</h3>
            <input
              className='block px-6 sm:py-4 py-[21px] w-full sm:text-xs text-sm md:leading-4 font-semibold bg-transparent rounded-2xl border border-primary border-solid appearance-none focus:outline-none focus:ring-0 focus:border-accent disabled:border-gray peer mb-4'
              type='text'
            />
            <p className='sm:text-xs text-sm italic'>Доступно: 0 из 18</p>
          </div>
          <div>
            <p className='font-bold sm:marker:text-xl leading-5 text-3xl mb-5 sm:mb-2.5'>
              К оплате: {userInLS?.orders?.at(-1).orderPrice} ₽
            </p>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold mb-5 sm:mb-2.5'>
              Тикетов будет начислено: 12
            </p>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold'>
              Скидка: 0 ₽
            </p>
          </div>
          <div className='flex justify-between gap-6 sm:gap-4 sm:flex-col'>
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
