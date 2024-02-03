import React from 'react';
import { IAddress } from '@/types';

type AddressViewProps = {
  address?: IAddress | null;
};

const AddressView: React.FC<AddressViewProps> = ({ address }) => {
  return address ? (
    <>
      <div className='mb-2'>
        <p className='text-xs leading-[15px] md:text-sm md:leading-[17px] font-bold max-md:-mb-1 md:pb-[3px] pr-[25px] flex flex-wrap break-words'>
          {address?.street && (
            <span className='break-words'>{`${address.street},`}&nbsp;</span>
          )}
          <br />
          {address?.house && (
            <span className='inline-block whitespace-nowrap'>
              {`дом ${address.house}`}
              &nbsp;
            </span>
          )}
          {address?.apartments && (
            <span className='inline-block whitespace-nowrap'>
              {`кв/офис ${address.apartments}`}
              &nbsp;
            </span>
          )}
        </p>
      </div>
      <>
        {address?.comment && (
          <p className='text-xs md:leading-[15px] line-clamp-3 md:line-clamp-4 break-words font-normal'>
            {address.comment}
          </p>
        )}
      </>
    </>
  ) : (
    'Выберите адрес'
  );
};

export default AddressView;
