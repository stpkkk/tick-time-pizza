'use client';

import React from 'react';
import {
  SelectChangeMoney,
  SelectDeliveryTime,
  SelectPaymentMethod,
  SelectPickupPoint,
} from '.';

const TabPickup: React.FC = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <SelectPickupPoint />
      <SelectPaymentMethod />
      <SelectChangeMoney />
      <SelectDeliveryTime />
    </div>
  );
};

export default TabPickup;
