'use client';

import React from 'react';
import { ModalWrapper } from '../common';
import { useLocalStorage } from '@/hooks';
import {
  setCurrentUser,
  setModalRemoveAddress,
  setOrderFormData,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalRemoveAddress: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useAppDispatch();
  const { isModalRemoveAddressOpen, addressToRemove, user, orderFormData } =
    useAppSelector((state) => state.profileReducer);

  const closeModal = () => {
    dispatch(setModalRemoveAddress(false));
  };

  const handleRemoveAddress = async () => {
    const updatedAddresses = user?.addresses?.filter(
      (address) => address.uuid !== addressToRemove?.uuid,
    );

    const updatedUser = { ...user, addresses: updatedAddresses };

    dispatch(setCurrentUser(updatedUser));
    await setUserInLS(updatedUser);

    if (user?.addresses) {
      dispatch(
        setOrderFormData({
          ...orderFormData,
          deliveryAddress: user?.addresses?.at(0),
        }),
      );
    }

    closeModal();
  };

  return isModalRemoveAddressOpen ? (
    <ModalWrapper closeModal={closeModal} width={500}>
      <div className='flex_center flex-col gap-[30px] sm:gap-4 px-16 py-[50px] sm:p-4'>
        <h3 className='h1'>Удаление адреса</h3>
        <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-bold'>
          Вы уверены, что хотите удалить адрес?
        </p>
        <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-bold'>
          <span>{addressToRemove?.street}, &nbsp;</span>
          <span>{addressToRemove?.house}</span>
        </p>
        <div className='flex_center gap-[30px] sm:gap-2.5 w-full'>
          <button
            className='btn_gray min-h-[60px] sm:min-h-[45px] max-w-[236px] uppercase'
            onClick={closeModal}
            type='button'
          >
            Отменить
          </button>
          <button
            className='btn_red min-h-[60px] sm:min-h-[45px] btn_disabled max-w-[236px]'
            onClick={handleRemoveAddress}
            type='button'
          >
            Удалить
          </button>
        </div>
      </div>
    </ModalWrapper>
  ) : null;
};

export default ModalRemoveAddress;
