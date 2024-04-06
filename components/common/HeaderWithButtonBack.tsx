import React, { FC } from 'react';
import ButtonBack from './ButtonBack';

interface HeaderWithButtonBackProps {
  text: string;
}

const HeaderWithButtonBack: FC<HeaderWithButtonBackProps> = ({ text }) => {
  return (
    <div className='md:my-4 md:ml-4 flex flex-row gap-2 my-10 ml-6'>
      <ButtonBack />
      <h1 className='h1'>{text}</h1>
    </div>
  );
};

export default HeaderWithButtonBack;
