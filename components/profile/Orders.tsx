'use client';

import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import OrderInfo from './OrderInfo';
import { IOrder } from '@/types';

type OrdersProps = {
  orders?: IOrder[];
};

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const [openOrderIds, setOpenOrderIds] = useState<string[]>([]);

  const toggleOrder = (selectedOrderId: string) => {
    setOpenOrderIds((prevIds) =>
      prevIds.includes(selectedOrderId)
        ? prevIds.filter((id) => id !== selectedOrderId)
        : [...prevIds, selectedOrderId],
    );
  };

  const isOrderOpen = (orderId?: string) => {
    return openOrderIds.includes(orderId || '');
  };

  return (
    <ul className='flex flex-col gap-[30px]'>
      {orders?.map((order) => (
        <li
          className='flex flex-col bg-white rounded-2xl drop-shadow-custom cursor-pointer px-[60px] py-[30px] sm:px-4 sm:py-8'
          key={order.id}
          onClick={() => toggleOrder(order.id || '')}
          tabIndex={1}
        >
          <div
            className={`flex flex-col ${
              !isOrderOpen(order.id) || 'gap-[50px]'
            }`}
          >
            <div className='flex_between w-full list-none'>
              <div className='flex_center gap-10'>
                <div>
                  <span className='font-bold text-xl leading-6 md:text-xs'>
                    #wqeqw
                  </span>
                </div>

                <div className='flex_center text-white rounded-xl bg-grayDark p-4 md:p-2.5 h-[44px]'>
                  <span className='font-bold uppercase'>Завершен</span>
                </div>

                <div>
                  <span className='text-xl leading-6 md:text-xs'>
                    {order.date} в {order.time}
                  </span>
                </div>
              </div>

              <div className='flex gap-6 sm:gap-2.5'>
                {isOrderOpen(order.id) ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>
            {isOrderOpen(order.id) && <OrderInfo order={order} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Orders;
