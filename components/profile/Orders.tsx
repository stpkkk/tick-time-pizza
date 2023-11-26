'use client';

import React from 'react';
import { useLocalStorage } from '@/hooks';
import { IOrder } from '@/types';

const Orders: React.FC = () => {
  const [userInLS] = useLocalStorage({}, 'user');

  console.log(userInLS);

  return (
    <ul>
      {userInLS &&
        userInLS.orders?.map((order: IOrder) => (
          <li key={order.id}>
            <ul>
              {order.products.map((product) => (
                <li
                  key={product.id}
                  className='bg-secondary font-bold text-primary'
                >
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
