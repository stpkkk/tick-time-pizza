import React from 'react';
import { ModalWrapper } from '../common';
import { useAppDispatch, useAppSelector, setModalTicketsInfo } from '@/redux';

const ModalTicketsInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalTicketsInfo } = useAppSelector(
    (state) => state.profileReducer,
  );

  const closeModal = () => {
    dispatch(setModalTicketsInfo(false));
  };

  if (!isModalTicketsInfo) return;

  return (
    <ModalWrapper closeModal={closeModal} width={500}>
      <div className='px-16 py-[50px] sm:p-4'>
        <h3 className='h1 mb-4 text-center'>Тикеты</h3>
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
