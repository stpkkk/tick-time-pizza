import React from 'react';
import Link from 'next/link';

const Phone: React.FC = () => {
  return (
    <div className='flex_center  h-full cursor-pointer flex-col whitespace-nowrap px-[28px] sm:flex-row sm:gap-2 sm:px-2'>
      <div>
        <Link
          href='tel:330204'
          className='font-zheldor text-[2rem] leading-10 '
        >
          33-02-04
        </Link>
      </div>
      <p className='text-[10px] font-semibold leading-[0.75rem] sm:text-[8px]'>
        круглосуточная
        <br /> бесплатная доставка*
      </p>
    </div>
  );
};

export default Phone;
