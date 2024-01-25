import React from 'react';
import { ModalWrapper } from '../common';
import { useLocalStorage } from '@/hooks';
import {
  addToAddresses,
  setModalRemoveAddress,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalRemoveAddress: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useAppDispatch();
  const { isModalRemoveAddressOpen, addressToRemove, user, addresses } =
    useAppSelector((state) => state.profileReducer);

  const closeModal = () => {
    dispatch(setModalRemoveAddress(false));
  };

  const handleRemoveAddress = async () => {
    const updatedAddresses = addresses.filter(
      (address) => address.uuid !== addressToRemove?.uuid,
    );

    if (updatedAddresses) {
      dispatch(addToAddresses(updatedAddresses));
      await setUserInLS(updatedAddresses);
      closeModal();
    }
  };

  if (!isModalRemoveAddressOpen) return;

  console.log(addressToRemove?.uuid);

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
        <div className='flex_center gap-[30px] sm:gap-2.5 w-full'>
          <button
            className='btn_gray max-w-[236px]'
            onClick={closeModal}
            type='button'
          >
            Отменить
          </button>
          <button
            className='btn_red btn_disabled max-w-[236px]'
            onClick={handleRemoveAddress}
            type='button'
          >
            Удалить
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalRemoveAddress;
