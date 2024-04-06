import React, { FC } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface LoaderProps {
  size?: number;
}

const Loader: FC<LoaderProps> = ({ size = 70 }) => {
  return (
    <div className='grid place-items-center min-h-[calc(100vh-358px)]'>
      <CgSpinner
        size={size}
        className='text-yellow animate-spin sm:max-w-[40px] sm:h-[40px]'
      />
    </div>
  );
};

export default Loader;
