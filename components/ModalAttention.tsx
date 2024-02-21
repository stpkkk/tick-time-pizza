'use client';

import React from 'react';
import { ModalWrapper } from './common';
import { setModalAttention } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalAttention = () => {
  const dispatch = useAppDispatch();
  const { isModalAttentionOpen } = useAppSelector((state) => state.menuReducer);

  const closeModal = React.useCallback(() => {
    dispatch(setModalAttention(false));
  }, [dispatch]);

  React.useEffect(() => {
    let pop_status = localStorage.getItem('pop_status');
    if (!pop_status) {
      dispatch(setModalAttention(true));
      localStorage.setItem('pop_status', '1');
    }
  }, [dispatch]);

  return isModalAttentionOpen ? (
    <ModalWrapper closeModal={closeModal} width={990}>
      <div className='p-[60px] sm:p-4 text-primary font-montserrat'>
        <h2 className='text-center h1 mb-[30px]'>Внимание!</h2>
        <p className='mb-4 text-xl font-bold text-center'>
          Данный сайт(приложение) является копией оригинального сайта пиццерии в
          городе Петрозаводск &nbsp;
          <a
            className='underline-offset-4 hover:text-secondary animate-fade-in underline'
            href='https://tick-time.ru'
            target='_blank'
          >
            &#34;Тик-Тайм&#34;
          </a>
          &nbsp; и является ТЕСТОВЫМ!
          <br /> Никакой коммерческой деятельности это приложение не несет и
          никаких платежных систем здесь не используется! По различным вопросам
          можете связаться со мной в&nbsp;
          <a
            className='underline-offset-4 hover:text-secondary animate-fade-in underline'
            href='https://t.me/stpkk'
            target='_blank'
          >
            Telegram
          </a>
          , в том числе по сотрудничеству в качестве разработчика!
        </p>
        <p className='text-secondary sm:text-center flex flex-col text-xl font-bold'>
          <span>Тестовые учетные данные:</span>
          <span>Телефон: +7 999 999 99 99</span>
          <span>Otp-code: 123456</span>
        </p>
      </div>
    </ModalWrapper>
  ) : null;
};

export default ModalAttention;
