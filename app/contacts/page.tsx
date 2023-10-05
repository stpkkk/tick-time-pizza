import React from 'react';
import { Pizzerias } from '@/components';
import { pizzerias } from '@/constants';

const Contacts: React.FC = () => {
  return (
    <div className='content_container min-h-[calc(100vh-268px)] mt-[90px] sm:pt-0'>
      <div className='px-[30px] sm:px-4'>
        <div className='h1 my-10 sm:my-4'>Контакты</div>
        <p className='sm:text-sm text-base sm:mb-[30px] mb-[50px]'>
          <span>
            <a className='underline' href='/'>
              Заказ пиццы{' '}
            </a>
          </span>
          можно совершить прямиком с этого сайта или позвонив на наш телефон.
          Если у вас возникнут трудности при совершении заказа пиццы, то на
          страницах нашего сайта вы сможете найти информацию о способах
          оформления заказа и условия доставки.
        </p>
        <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold sm:mb-[30px] mb-[50px]'>
          Заказы на доставку принимаем 24/7.
        </p>
        {pizzerias.map((pizzeria) => (
          <Pizzerias pizzeria={pizzeria} />
        ))}
        <p className='sm:text-sm text-base sm:mb-30px mb-50px'>
          Телефон для заказа пиццы, еды и напитков в "Тик Тайм":{' '}
          <span>
            <a className='underline' href='tel:330204'>
              33-02-04;
            </a>
          </span>
          <br />
          Телeфон отдела сервиса:
          <a className='underline' href='tel:+79052999208'>
            +7(905)299-92-08.
          </a>
          <br />
          Время работы "Отдела сервиса" каждый день с 10:00 до 22:00;
          <br />
          <a className='underline' href='mailto:ticktime.mail@gmail.com'>
            ticktime.mail@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
