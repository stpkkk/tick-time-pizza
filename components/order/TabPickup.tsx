'use client';

import React from 'react';
import {
  SelectChangeMoney,
  SelectDeliveryDate,
  SelectPaymentMethod,
  SelectPickupPoint,
} from '.';

const TabPickup: React.FC = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <SelectPickupPoint />
      <SelectPaymentMethod />
      <SelectChangeMoney />
      <SelectDeliveryDate />
    </div>
  );
};

export default TabPickup;
