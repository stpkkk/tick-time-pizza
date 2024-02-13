import React from 'react';
import { IAddress } from '@/types';

type AddressViewProps = {
  address?: IAddress | null;
};

const AddressView: React.FC<AddressViewProps> = ({ address }) => {
  const renderAddressLine = (label: string, value?: string) =>
    value && (
      <span className='whitespace-nowrap inline-block'>
        {`${label} ${value}`}
        &nbsp;
      </span>
    );

  return address ? (
    <div className='mb-2'>
      <p className='text-xs leading-[15px] md:text-sm md:leading-[17px] font-bold md:pb-[3px] flex flex-wrap break-words'>
        {renderAddressLine(address.street && 'ул.', address.street)}
        <br />
        {renderAddressLine(address.house && 'дом', address.house)}
        {renderAddressLine(address.apartments && 'кв/офис', address.apartments)}
      </p>

      {address.comment && (
        <p className='text-xs md:leading-[15px] line-clamp-3 md:line-clamp-4 break-words font-normal'>
          {address.comment}
        </p>
      )}
    </div>
  ) : (
    <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
      Выберите адрес
    </span>
  );
};

export default AddressView;
