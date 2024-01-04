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
            <td className=''>К оплате:</td>
            <td>{order.orderPrice} ₽</td>
          </tr>
          <tr>
            <td>Способ оплаты:</td>
            <td>{order.paymentMethod}</td>
          </tr>
          <tr>
            <td>Тикеты:</td>
            <td>{order.tickets}</td>
          </tr>
          <tr>
            <td>Доставка по адресу:</td>
            {/* <td>{order.address}</td> */}
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
        <tbody className='flex_start flex-col gap-16 md:gap-8'>
          {order.products?.map((product) => (
            <tr
              className='flex justify-between gap-24 sm:gap-4 w-full'
              key={product.id}
            >
              <td className='w-full'>
                <SelectedProductOptions product={product} />
              </td>
              <div className='flex justify-between gap-6 w-1/3'>
                <td className='self-start whitespace-nowrap'>
                  {product.productQuantity} шт.
                </td>
                <td className='font-semibold whitespace-nowrap'>
                  {product.totalPrice} ₽
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
