'use client';

import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { IOrder } from '@/types';

type OrdersProps = {
  orders?: IOrder[];
};

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const [openOrderId, setOpenOrderId] = React.useState<string | undefined>('');

  const toggleOrder = (selectedOrder: IOrder) => {
    setOpenOrderId((prevId) =>
      prevId === selectedOrder.id ? '' : selectedOrder.id,
    );
  };

  return (
    <ul className='flex flex-col gap-[30px]'>
      {orders?.map((order) => (
        <li
          className='flex flex-col px-[60px] py-[30px] bg-white rounded-2xl drop-shadow-custom'
          key={order.id}
        >
          <div className='flex justify-between w-full'>
            <div className='flex items-center gap-6 sm:gap-2.5'>
              <div>
                <span className='font-bold text-xl leading-6 md:text-xs'>
                  #ewfwef
                </span>
              </div>
              <div className='flex items-center justify-center text-white rounded-xl bg-gray p-4 md:p-2.5 h-[44px]'>
                <span className='font-bold uppercase'>Завершен</span>
              </div>
              <div>
                <span className='text-xl leading-6 md:text-xs'>
                  {order.date} в {order.time}
                </span>
              </div>
            </div>
            <button onClick={() => toggleOrder(order)} type='button'>
              {openOrderId === order.id ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </button>
          </div>
          {openOrderId === order.id ? (
            <ul>
              {order.products.map((product) => (
                <li key={product.id} className='font-bold text-primary'>
                  {product.title}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default Orders;
