import React from 'react';
import { ChangeMoneyFrom } from '@/types';

const SelectChangeMoney: React.FC = () => {
  const ChangeMoneyFromArray: string[] = Object.values(ChangeMoneyFrom);

  const handleClick = () => {};

  return (
    <section>
      <h3 className='h3 mb-4'>Сдача С:</h3>
      <ul className='flex sm:flex-col gap-[30px]'>
        {ChangeMoneyFromArray.map((change) => (
          <li
            className='btn_grayLight p-[30px] h-[60px] sm:max-w-full flex_center text-sm py-2 sm:px-4 px-10 sm:h-[50px]'
            key={change}
            onClick={handleClick}
          >
            <button type='button'>{change}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectChangeMoney;
