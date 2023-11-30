'use client';

import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { setModalTicketsInfo } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';

const ModalTicketsInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalRef = React.useRef<HTMLDivElement>(null);

  const closeModal = () => {
    dispatch(setModalTicketsInfo(false));
  };

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(setModalTicketsInfo(false));
      }
    },
    [dispatch],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleClickOutside]);

  return (
    <div className='relative z-10'>
      <div className='overlay' />
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full sm:items-stretch sm:p-0 sm:text-center'>
        <div
          className='modal_inner max-w-[500px] sm:rounded-none px-16 py-[50px] sm:flex sm:flex-col sm:justify-center sm:max-w-full'
          ref={modalRef}
        >
          <button
            className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
            type='button'
            onClick={closeModal}
          >
            <RiCloseFill size={36} className='md:w-7' />
          </button>
          <h3 className='h1 text-center mb-4'>Тикеты</h3>
          <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] whitespace-pre-wrap'>
            Делай заказы на нашем сайте или в приложении, копи тикеты и
            оплачивай ими заказы! 1 тикет = 1 рублю.
            <br /> 3% от суммы каждого заказа будут начислены на Ваш личный
            кабинет!
            <br />
            <br /> Начисление происходит только после оплаты заказа.
            <br />
            Воспользоваться тикетами можно только при заказе с сайта или нашего
            приложения; Чтобы оформить доставку, часть заказа оплаченная
            денежными средствами, должна быть не менее 545 рублей, вторая часть
            оплаченная бонусами может быть любого размера;
            <br /> При самовывозе Вы можете оплатить часть заказа, либо весь
            заказ полностью тикетами.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalTicketsInfo;