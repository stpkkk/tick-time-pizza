'use client';

import React from 'react';
import { IOrder } from '@/types';

type OrdersProps = {
  orders: IOrder[];
};

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          <ul>
            {order.products.map((product) => (
              <li key={product.id} className='font-bold text-primary'>
                {product.title}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Orders;
