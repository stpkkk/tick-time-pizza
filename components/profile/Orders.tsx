'use client';

import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import OrderDetails from './OrderDetails';
import { IOrder } from '@/types';
import { generateUUID } from '@/utils';

type OrdersProps = {
  orders?: IOrder[];
};

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const [openOrderIds, setOpenOrderIds] = React.useState<string[]>([]);

  const toggleOrder = (selectedOrderId: string) => {
    setOpenOrderIds((prevIds) =>
      prevIds.includes(selectedOrderId)
        ? prevIds.filter((id) => id !== selectedOrderId)
        : [...prevIds, selectedOrderId],
    );
  };

  const isOrderOpen = (orderId: string) => {
    return openOrderIds.includes(orderId);
  };

  return (
    <ul className='flex flex-col-reverse gap-[30px] sm:gap-4'>
      {orders?.map((order: IOrder) => (
        <li
          className='flex flex-col wrapper cursor-pointer px-[60px] py-[30px] sm:p-4'
          key={generateUUID()}
          onClick={() => toggleOrder(order.id || '')}
          tabIndex={1}
        >
          <div
            className={`flex flex-col ${
              !isOrderOpen(order.id || '') || 'gap-[50px]'
            }`}
          >
            <div className='flex items-center justify-between w-full flex-nowrap'>
              <div className='gap-10 flex_center sm:gap-4'>
                <div>
                  <p className='text-xl font-bold leading-6 md:text-xs'>
                    #{order.id}
                  </p>
                </div>
                <div className='flex_center text-white rounded-xl bg-grayDark p-4 md:p-2 h-[44px] sm:h-[32px]'>
                  <span className='font-bold uppercase sm:text-[10px]'>
                    Завершен
                  </span>
                </div>
                <div>
                  <p className='text-xl leading-6 md:text-xs '>
                    {order.date} в {order.time}
                  </p>
                </div>
              </div>
              {isOrderOpen(order.id || '') ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </div>
            {isOrderOpen(order.id || '') && <OrderDetails order={order} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Orders;
