import React, { FC } from 'react';

const Contacts: FC = () => {
  return (
    <p className='sm:text-sm text-base sm:mb-[30px] mb-[50px]'>
      Телефон для заказа пиццы, еды и напитков в &quot;Тик Тайм&quot;:{' '}
      <span>
        {' '}
        <a className='underline' href='tel:330204'>
          33-02-04;
        </a>
      </span>
      <br />
      Телeфон отдела сервиса:{' '}
      <a className='underline' href='tel:+79052999208'>
        +7(905)299-92-08.
      </a>
      <br />
      Время работы &quot;Отдела сервиса&quot; каждый день с 10:00 до 22:00;
      <br />
      <a className='underline' href='mailto:ticktime.mail@gmail.com'>
        ticktime.mail@gmail.com
      </a>
    </p>
  );
};

export default Contacts;
