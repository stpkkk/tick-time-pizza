import React from 'react';
import { HeaderWithButtonBack, LegalInfo } from '@/components';

const LegalPage: React.FC = () => {
  return (
    <main className='mt-[90px] sm:pt-0'>
      <HeaderWithButtonBack text='Правовая информация' />
      <LegalInfo />
    </main>
  );
};

export default LegalPage;
