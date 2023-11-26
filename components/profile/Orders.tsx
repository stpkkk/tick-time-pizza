'use client';

import React from 'react';
import { useLocalStorage } from '@/hooks';
import { setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);
  const [storedUser] = useLocalStorage([], 'user');

  React.useEffect(() => {
    // If user is present in localStorage, dispatch it to the store
    if (storedUser) {
      dispatch(setCurrentUser(storedUser));
    }
  }, [dispatch, storedUser]);

  console.log(user?.orders);

  // Ensure user and orders are available before rendering
  if (!user || !user.orders) {
    return <div>Loading...</div>; // Or any other loading indicator/message
  }

  return (
    <ul>
      {user?.orders?.map((order) => (
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
