import React from 'react';
import { LuMapPin } from 'react-icons/lu';

const selectAddress: React.FC = () => {
  const handleClick = () => {};

  return (
    <section>
      <h3 className='h3 mb-4'>Куда доставить заказ?</h3>
      <ul className='grid smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4 justify-items-center sm:gap-2.5 gap-[30px]'>
        <li
          className='btn_grayLight p-[30px] h-[96px] max-w-[255px] sm:max-w-full flex justify-between gap-5 w-full'
          onClick={handleClick}
        >
          <LuMapPin size={40} className='text-grayDark' />
          <button className='text-left w-full' type='button'>
            Добавить новый адрес
          </button>
        </li>
      </ul>
    </section>
  );
};

export default selectAddress;
