import React from 'react';
import { DeliveryInfo, DeliveryMap, HeaderWithButtonBack } from '@/components';

const DeliveryPage: React.FC = () => {
  return (
    <main className='mt-[90px] sm:pt-0'>
      <HeaderWithButtonBack text='Доставка' />
      <DeliveryInfo />
      <DeliveryMap />
    </main>
  );
};

export default DeliveryPage;
