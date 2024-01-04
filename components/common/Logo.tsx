import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/icons/logo.svg';

const Logo: React.FC = () => {
  return (
    <Link
      href='/'
      className='relative mr-auto flex-shrink-0 h-full max-h-[57px] w-full max-w-[57px] sm:max-h-[45px] sm:max-w-[45px]'
    >
      <Image src={logo} alt='logo' fill />
    </Link>
  );
};

export default Logo;
