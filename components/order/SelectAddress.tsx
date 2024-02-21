import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddressView from './AddressView';
import OptionToSelect from './OptionToSelect';
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
      <ul className='grid smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4 justify-items-center sm:gap-4 gap-[30px]'>
        <li
          className='btn_grayLight p-[30px] max-w-[255px] sm:max-w-full flex justify-between sm:flex-col sm:items-start sm:gap-2 gap-5 w-full h-[96px] sm:p-4'
          onClick={handleClickAddAddress}
        >
          <LuMapPin size={40} className='text-grayDark sm:w-8' />
          <button
            className='w-full text-xs leading-[15px] md:text-sm md:leading-[17px] font-bold text-left'
            type='button'
          >
            Добавить новый адрес
          </button>
        </li>
        {user?.addresses?.map((address) => (
          <li
            className='btn_grayLight h-[96px] max-w-[255px] sm:max-w-full flex justify-between flex-col space-y-[14px] text-sm gap-5 w-full relative'
            key={address.uuid}
          >
            <OptionToSelect
              id={address.uuid}
              onChange={() => handleChangeAddress(address)}
              checked={orderFormData.deliveryAddress?.uuid === address.uuid}
              value={address.uuid}
              name={address.uuid}
              className='p-[30px] sm:p-4 w-full min-h-[96px]'
              innerHTML={
                <>
                  <AddressView address={address} />
                  <button
                    className='top-4 right-4 hover:bg-white animate-fade-in absolute p-1 rounded-full'
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
