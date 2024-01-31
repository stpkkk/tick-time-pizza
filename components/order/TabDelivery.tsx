'use client';

import React from 'react';
import {
  SelectAddress,
  SelectChangeMoney,
  SelectDeliveryDate,
  SelectDeliveryTime,
  SelectPaymentMethod,
} from '.';

const TabDelivery: React.FC = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <SelectAddress />
      <SelectPaymentMethod />
      <SelectChangeMoney />
      <SelectDeliveryDate />
      <SelectDeliveryTime />
    </div>
  );
};

export default TabDelivery;
