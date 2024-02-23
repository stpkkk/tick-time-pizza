import React from 'react';
import { Input } from '../common';

const Promocode: React.FC = () => {
  const [isPromoDisabled, setIsPromoDisabled] = React.useState(true);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') {
      setIsPromoDisabled(true);
    } else {
      setIsPromoDisabled(false);
    }
  };

  return (
    <div className='md:w-full relative'>
      <Input id='code' onChange={onInputChange} label='Промокод' type='text' />
      <button
        type='submit'
        className='btn_yellow btn_disabled max-w-[70px] absolute sm:rounded-[13px] top-1 right-[3px] md:right-1 h-[52px] uppercase'
        disabled={isPromoDisabled}
      >
        Ок
      </button>
    </div>
  );
};

export default Promocode;
