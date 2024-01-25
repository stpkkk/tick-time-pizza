import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  setAddressToRemove,
  setModalAddAddress,
  setModalRemoveAddress,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IAddress } from '@/types';
import { generateUUID } from '@/utils';

const SelectAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, addressToRemove } = useAppSelector(
    (state) => state.profileReducer,
  );

  const handleClickAddAddress = () => {
    dispatch(setModalAddAddress(true));
  };

  const handleClickDelete = (clickedAddress: IAddress) => {
    const selectedAddress = user?.addresses?.find(
      (address) => address.uuid === clickedAddress.uuid,
    );
    if (selectedAddress) {
      dispatch(setAddressToRemove(selectedAddress));
    }
    dispatch(setModalRemoveAddress(true));
  };

  return (
    <>
      <section>
        <h3 className='h3 mb-4'>Куда доставить заказ?</h3>
        <ul className='grid smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4 justify-items-center sm:gap-4 gap-[30px]  h-auto'>
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
              className='relative btn_grayLight p-[30px] sm:h-[96px] max-w-[255px] sm:max-w-full flex justify-between flex-col space-y-[14px] text-sm gap-5 w-full'
              key={generateUUID()}
            >
              <p className='text-xs leading-[15px] md:text-sm md:leading-[17px] font-bold max-md:-mb-1 md:pb-[3px] pr-[25px] flex flex-wrap break-words'>
                <span className='break-words'>
                  {`${address.street},`}&nbsp;
                </span>
                <br />
                <br />
                <span className='inline-block whitespace-nowrap'>
                  {`дом ${address.house},`}
                  &nbsp;
                </span>
                <span className='inline-block whitespace-nowrap'>
                  {`кв/офис ${address.apartments},`}
                  &nbsp;
                </span>
              </p>
              <p className='text-xs md:leading-[15px] line-clamp-3 md:line-clamp-4 break-words font-normal'>
                {address.comment}
              </p>
              <button
                className='absolute top-0 right-2 hover:bg-white rounded-full p-1'
                onClick={() => handleClickDelete(address)}
                type='button'
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SelectAddress;
