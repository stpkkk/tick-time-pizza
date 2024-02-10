import React from 'react';
import { SelectedProductOptions } from '../common';
import { IOrder } from '@/types';

type OrderProps = {
  order: IOrder;
};

const OrderDetails: React.FC<OrderProps> = ({ order }) => {
  return (
    <div className='flex justify-between gap-[30px] w-full md:flex-wrap md:text-xs md:leading-[15px] text-base leading-5'>
      <table className='max-w-1/2 w-full'>
        <tbody className='flex flex-col gap-4 w-full [&>tr]:grid [&>tr]:grid-cols-2 [&>tr]:gap-2.5 [&>tr>td:first-child]:font-semibold'>
          <tr className='grid grid-cols-2 gap-2.5 whitespace-nowrap'>
            <td>К оплате:</td>
            <td>{order.price} ₽</td>
          </tr>
          <tr>
            <td>Способ оплаты:</td>
            <td>{order.paymentMethod}</td>
          </tr>
          <tr>
            <td>Тикеты:</td>
            <td>{order.ticketsToUse}</td>
          </tr>
          <tr>
            <td>Доставка по адресу:</td>
            <td>{order.deliveryAddress?.street}</td>
          </tr>
          <tr>
            <td>Заказ принят:</td>
            <td>{order.time}</td>
          </tr>
          <tr>
            <td>Время доставки:</td>
            <td>40 минут</td>
          </tr>
        </tbody>
      </table>
      <table className='max-w-1/2 w-full'>
        <tbody className='flex_start md:gap-8 flex-col gap-16'>
          {order.products?.map((product) => (
            <tr
              className='sm:gap-4 flex justify-between w-full gap-24'
              key={product.id}
            >
              <td className='w-full'>
                <SelectedProductOptions product={product} />
              </td>
              <td className='flex justify-between w-1/3 gap-6'>
                <div className='whitespace-nowrap self-start'>
                  {product.productQuantity} шт.
                </div>
                <div className='whitespace-nowrap font-semibold'>
                  {product.totalPrice} ₽
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
