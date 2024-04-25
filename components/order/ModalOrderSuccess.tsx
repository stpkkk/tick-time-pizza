'use client';

import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { Modal } from '../common';
import { useLocalStorage } from '@/hooks';
import {
  resetOrderFormData,
  setModalOrderSuccessOpen,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalOrderSuccess: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isModalOrderSuccessOpen } = useAppSelector(
    (state) => state.profileReducer,
  );
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

  const closeModal = async () => {
    dispatch(setModalOrderSuccessOpen(false));
    router.push('/profile');
    dispatch(resetOrderFormData());
    await setCartProductInLS([]);
  };

  return isModalOrderSuccessOpen ? (
    <Modal closeModal={closeModal} width={990}>
      <div className='p-[60px] sm:p-4'>
        <div className='flex_center gap-4'>
          <h2 className='h1'>
            <span>Ваш заказ принят!</span>
          </h2>
          <FaCircleCheck className='text-green-500' size={35} />
        </div>
      </div>
    </Modal>
  ) : null;
};

export default ModalOrderSuccess;
