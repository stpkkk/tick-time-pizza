import React from 'react';
import { Notice } from '../common';
import OptionToSelect from './OptionToSelect';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { PaymentMethods } from '@/types';

const SelectPaymentMethod: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orderFormData } = useAppSelector((state) => state.profileReducer);
  const paymentMethodsArray: string[] = Object.values(PaymentMethods);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setOrderFormData({ ...orderFormData, paymentMethod: e.target.value }),
    );
  };

  const isChecked = (value: string) => orderFormData.paymentMethod === value;

  return (
    <section>
      <div className='flex w-full gap-2 mb-4'>
        <h3 className='h3'>Способ оплаты:</h3>
        <Notice text='Внимание! Оплата по картам (онлайн) осуществляется через платежный шлюз Сбербанка. Переход на него осуществляется при нажатии на кнопку "Заказать". После успешной оплаты мы получим ваш платеж в течение 3-5 минут. Подробнее об оплате вы можете узнать' />
      </div>

      <ul className='flex sm:flex-col gap-[30px] sm:gap-4'>
        {paymentMethodsArray.map((payMethod) => (
          <li key={payMethod}>
            <OptionToSelect
              id={payMethod}
              onChange={handleChange}
              checked={isChecked(payMethod)}
              value={payMethod}
              name={payMethod}
              className='px-[30px] min-h-[60px] sm:max-w-full flex_center sm:px-4 sm:min-h-[50px]'
              innerHTML={
                <span className='text-sm font-bold sm:text-[12px]'>
                  {payMethod}
                </span>
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectPaymentMethod;
