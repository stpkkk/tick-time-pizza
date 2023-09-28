import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/icons/logo.svg';

const Logo: React.FC = () => {
  return (
    <Link href='/' className='mr-auto'>
      <Image
        src={logo}
        alt='logo'
        className='h-full max-h-[57px] w-full max-w-[57px] sm:max-h-[45px] sm:max-w-[45px]'
      />
    </Link>
  );
};

export default Logo;
