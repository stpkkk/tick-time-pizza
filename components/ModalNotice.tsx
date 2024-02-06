import React from 'react';
import { ModalWrapper } from './common';
import { setModalNotice } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ModalNotice = () => {
  const dispatch = useAppDispatch();
  const { isModalNoticeOpen } = useAppSelector((state) => state.menuReducer);

  const closeModal = React.useCallback(() => {
    dispatch(setModalNotice(false));
  }, [dispatch]);

  React.useEffect(() => {
    let pop_status = localStorage.getItem('pop_status');
    if (!pop_status) {
      dispatch(setModalNotice(true));
      localStorage.setItem('pop_status', '1');
    }
  }, [dispatch]);

  return isModalNoticeOpen ? (
    <ModalWrapper closeModal={closeModal} width={990}>
      <div className='p-[60px] sm:p-4'>
        <h2 className='text-center h1 mb-[30px]'>Внимание!</h2>
        <p className='text-xl font-bold text-center'>
          Данный сайт(приложение) является копией оригинального сайта пиццерии в
          городе Петрозаводск &nbsp;
          <a
            className='underline underline-offset-4 hover:text-yellow'
            href='https://tick-time.ru'
            target='_blank'
          >
            &#34;Тик-Тайм&#34;
          </a>
          &nbsp; и является ТЕСТОВЫМ! Так же никакой коммерческой деятельности
          это приложение не несет и никаких платежных систем здесь не
          используется! По различным вопросам можете связаться со мной в&nbsp;
          <a
            className='underline underline-offset-4 hover:text-yellow'
            href='https://t.me/stpkk'
            target='_blank'
          >
            Telegram
          </a>
          &nbsp;, в том числе по сотрудничеству!
        </p>
      </div>
    </ModalWrapper>
  ) : null;
};

export default ModalNotice;
