import React from 'react';
import { ButtonsSaveCancel, ModalWrapper } from '../common';
import { setModalRemoveAddress } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalRemoveAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalRemoveAddressOpen, addressToRemove } = useAppSelector(
    (state) => state.profileReducer,
  );
  const closeModal = () => {
    dispatch(setModalRemoveAddress(false));
  };

  if (!isModalRemoveAddressOpen) return;

  return (
    <ModalWrapper closeModal={closeModal} width={500}>
      <div className='flex_center flex-col gap-[30px] sm:gap-4 px-16 py-[50px] sm:p-4'>
        <h3 className='h1'>Удаление адреса</h3>
        <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-bold'>
          Вы уверены, что хотите удалить адрес?
        </p>
        <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-bold'>
          {addressToRemove?.street}
        </p>
        <ButtonsSaveCancel disabled={false} clickCancel={closeModal} />
      </div>
    </ModalWrapper>
  );
};

export default ModalRemoveAddress;
