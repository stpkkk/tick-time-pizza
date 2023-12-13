'use client';

import React from 'react';
import {
  SelectAddress,
  SelectChangeMoney,
  SelectDeliveryTime,
  SelectPaymentMethod,
} from '.';

const TabDelivery: React.FC = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <SelectAddress />
      <SelectPaymentMethod />
      <SelectChangeMoney />
      <SelectDeliveryTime />
    </div>
  );
};

export default TabDelivery;
