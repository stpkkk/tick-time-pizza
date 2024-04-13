import React from 'react';
import {
  Contacts,
  ContactsMap,
  DescriptionForOrderingPizza,
  HeaderWithButtonBack,
  Pizzerias,
} from '@/components';

const ContactsPage: React.FC = () => {
  return (
    <main className='mt-[90px] sm:mt-[70px]'>
      <HeaderWithButtonBack text='Контакты' />
      <div className='px-[30px] sm:px-4'>
        <DescriptionForOrderingPizza />
        <Pizzerias />
        <Contacts />
        <ContactsMap />
      </div>
    </main>
  );
};

export default ContactsPage;
