import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ModalWrapper } from '../common';
import { setModalTicketsInfo } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';

const ModalTicketsInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setModalTicketsInfo(false));
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div
        className='modal_inner max-w-[500px] px-16 py-[50px] sm:p-8'
        onClick={(e) => e.stopPropagation()}
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
          Делай заказы на нашем сайте или в приложении, копи тикеты и оплачивай
          ими заказы! 1 тикет = 1 рублю.
          <br /> 3% от суммы каждого заказа будут начислены на Ваш личный
          кабинет!
          <br />
          <br /> Начисление происходит только после оплаты заказа.
          <br />
          Воспользоваться тикетами можно только при заказе с сайта или нашего
          приложения; Чтобы оформить доставку, часть заказа оплаченная денежными
          средствами, должна быть не менее 545 рублей, вторая часть оплаченная
          бонусами может быть любого размера;
          <br /> При самовывозе Вы можете оплатить часть заказа, либо весь заказ
          полностью тикетами.
        </p>
      </div>
    </ModalWrapper>
  );
};

export default ModalTicketsInfo;
