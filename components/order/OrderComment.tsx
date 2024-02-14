import React from 'react';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const OrderComment: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orderFormData } = useAppSelector((state) => state.profileReducer);

  const onCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedOrder = { ...orderFormData, comment: e.target.value };
    dispatch(setOrderFormData(updatedOrder));
  };

  return (
    <div>
      <h3 className='h3 mb-4'>Комментарий к заказу</h3>
      <textarea
        className='block px-6 sm:py-4 py-[21px] w-full sm:text-xs text-sm leading-4 sm:leading-[15px] font-semibold bg-transparent rounded-2xl border border-primary border-solid appearance-none focus:outline-none focus:ring-0 focus:border-yellow disabled:border-dark-light peer resize-none'
        onChange={onCommentChange}
        name='comment'
        id='comment'
        rows={5}
      />
    </div>
  );
};

export default OrderComment;
