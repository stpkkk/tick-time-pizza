import React, { FC } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface LoaderProps {
  size?: number;
}

const Loader: FC<LoaderProps> = ({ size = 70 }) => {
  return (
    <CgSpinner
      size={size}
      className='text-yellow animate-spin sm:max-w-[40px] sm:h-[40px]'
    />
  );
};

export default Loader;
