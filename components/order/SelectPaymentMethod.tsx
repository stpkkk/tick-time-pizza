import React from 'react';
import { PaymentMethods } from '@/types';

const SelectPaymentMethod: React.FC = () => {
  const paymentMethodsArray: string[] = Object.values(PaymentMethods);

  const handleClick = () => {};

  return (
    <section>
      <h3 className='relative h3 mb-4'>
        Способо оплаты:<span></span>{' '}
      </h3>
      <ul className='flex sm:flex-col gap-[30px]'>
        {paymentMethodsArray.map((payMethod) => (
          <li
            className='btn_grayLight p-[30px] h-[60px] sm:max-w-full flex_center text-sm py-2 sm:px-4 px-10 sm:h-[50px]'
            key={payMethod}
            onClick={handleClick}
          >
            <button type='button'>{payMethod}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectPaymentMethod;
