import React from 'react';
import { SelectedProductOptions } from '../common';
import { IOrder, Supply } from '@/types';

type OrderProps = {
  order: IOrder;
};

const OrderDetails: React.FC<OrderProps> = ({ order }) => {
  const {
    price,
    paymentMethod,
    ticketsToUse,
    ticketsToAdd,
    deliveryAddress,
    pickPoint,
    time,
    products,
    comment,
    supplyMethod,
  } = order;

  const isDelivery = supplyMethod === Supply.DELIVERY;

  return (
    <div className='flex justify-between gap-[30px] w-full md:flex-wrap md:text-xs md:leading-[15px] text-base leading-5'>
      <table className='max-w-1/2 w-full'>
        <tbody className='flex flex-col gap-4 w-full [&>tr]:grid [&>tr]:grid-cols-2 [&>tr]:gap-2.5 [&>tr>td:first-child]:font-semibold'>
          <tr className='grid grid-cols-2 gap-2.5 whitespace-nowrap'>
            <td>К оплате:</td>
            <td>{price} ₽</td>
          </tr>
          <tr>
            <td>Способ оплаты:</td>
            <td>{paymentMethod}</td>
          </tr>
          <tr>
            <td>Тикеты:</td>
            <td>
              Потрачено: {ticketsToUse}, Начислено: {ticketsToAdd}
            </td>
          </tr>
          {isDelivery ? (
            <tr>
              <td>Доставка по адресу:</td>
              <td>
                {deliveryAddress?.street}, {deliveryAddress?.house}
              </td>
            </tr>
          ) : (
            <tr>
              <td>Самовывоз:</td>
              <td>{pickPoint}</td>
            </tr>
          )}
          {comment && (
            <tr>
              <td>Комментарий</td>
              <td>{comment}</td>
            </tr>
          )}
          <tr>
            <td>Заказ принят:</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>Время доставки:</td>
            <td>40 минут</td>
          </tr>
        </tbody>
      </table>
      <table className='max-w-1/2 w-full'>
        <tbody className='flex_start md:gap-8 flex-col gap-16'>
          {products?.map((product) => (
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
