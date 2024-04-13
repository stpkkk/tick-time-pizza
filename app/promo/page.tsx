'use client';

import React from 'react';
import { HeaderWithButtonBack, ModalPromo, PromoList } from '@/components';

const PromoListPage: React.FC = () => {
  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      <HeaderWithButtonBack text='Акции' />
      <PromoList />
      <ModalPromo />
    </main>
  );
};

export default PromoListPage;
