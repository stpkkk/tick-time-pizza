import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RadioButton } from '../common';
import AddressView from './AddressView';
import {
  setAddressToRemove,
  setModalAddAddress,
  setModalRemoveAddress,
  setOrderFormData,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IAddress } from '@/types';

const SelectAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, orderFormData } = useAppSelector(
    (state) => state.profileReducer,
  );

  const handleChangeAddress = (selectedAddress: IAddress) => {
    dispatch(
      setOrderFormData({
        ...orderFormData,
        deliveryAddress: selectedAddress,
      }),
    );
  };

  const handleClickDelete = (clickedAddress: IAddress) => {
    dispatch(setAddressToRemove(clickedAddress));
    dispatch(setModalRemoveAddress(true));
  };

  const handleClickAddAddress = () => {
    dispatch(setModalAddAddress(true));
  };

  React.useEffect(() => {
    if (!orderFormData.deliveryAddress && user?.addresses) {
      dispatch(
        setOrderFormData({
          ...orderFormData,
          deliveryAddress: user?.addresses?.at(0),
        }),
      );
    }
  }, [dispatch, orderFormData, user?.addresses]);

  return (
    <section>
      <h3 className='h3 mb-4'>Куда доставить заказ?</h3>
      <ul className='grid smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4 justify-items-center sm:gap-4 gap-[30px] h-auto min-h-[96px]'>
        <li
          className='btn_grayLight p-[30px] max-w-[255px] sm:max-w-full flex justify-between gap-5 w-full h-auto'
          onClick={handleClickAddAddress}
        >
          <LuMapPin size={40} className='text-grayDark' />
          <button className='text-left w-full' type='button'>
            Добавить новый адрес
          </button>
        </li>
        {user?.addresses?.map((address) => (
          <li
            className='btn_grayLight min-h-[96px] max-w-[255px] sm:max-w-full flex justify-between flex-col space-y-[14px] text-sm gap-5 w-full relative'
            key={address.uuid}
          >
            <RadioButton
              id={address.uuid}
              onChange={() => handleChangeAddress(address)}
              checked={orderFormData.deliveryAddress?.uuid === address.uuid}
              value={address.uuid}
              name={address.uuid}
              className='p-[30px] w-full h-full'
              innerHTML={
                <>
                  <AddressView address={address} />
                  <button
                    className='absolute top-4 right-4 hover:bg-white rounded-full p-1'
                    onClick={() => handleClickDelete(address)}
                    type='button'
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectAddress;
