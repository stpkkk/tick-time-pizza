import React from 'react';
import Link from 'next/link';
import { Pizzerias } from '@/components';
import { pizzerias } from '@/constants';

const Contacts: React.FC = () => {
  return (
    <main className='mt-[90px] sm:pt-0'>
      <div className='px-[30px] sm:px-4'>
        <h1 className='h1 my-10 sm:my-4'>Контакты</h1>
        <p className='sm:text-sm text-base sm:mb-[30px] mb-[50px]'>
          <Link className='underline' href='/'>
            Заказ пиццы
          </Link>
          можно совершить прямиком с этого сайта или позвонив на наш телефон.
          Если у вас возникнут трудности при совершении заказа пиццы, то на
          страницах нашего сайта вы сможете найти информацию о способах
          оформления заказа и условия доставки.
        </p>
        <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold sm:mb-[30px] mb-[50px]'>
          Заказы на доставку принимаем 24/7.
        </p>
        {pizzerias.map((pizzeria) => (
          <Pizzerias pizzeria={pizzeria} key={pizzeria.id} />
        ))}
        <p className='sm:text-sm text-base sm:mb-[30px] mb-[50px]'>
          Телефон для заказа пиццы, еды и напитков в &quot;Тик Тайм&quot;:{' '}
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
          Время работы &quot;Отдела сервиса&quot; каждый день с 10:00 до 22:00;
          <br />
          <a className='underline' href='mailto:ticktime.mail@gmail.com'>
            ticktime.mail@gmail.com
          </a>
        </p>
        <div className='rounded-2xl overflow-hidden'>
          <a
            href='https://yandex.ru/maps/18/petrozavodsk/?utm_medium=mapframe..'
            style={{
              color: 'rgb(238, 238, 238)',
              fontSize: '12px',
              position: 'absolute',
              top: '0px',
            }}
          >
            Петрозаводск
          </a>
          <a
            href='https://yandex.ru/maps/18/petrozavodsk/?from=api-maps&amp;ll=..'
            style={{
              color: 'rgb(238, 238, 238)',
              fontSize: '12px',
              position: 'absolute',
              top: '14px',
            }}
          >
            Яндекс.Карты — поиск мест и адресов, городской транспорт
          </a>
          <iframe
            src='https://yandex.ru/map-widget/v1/-/CCUEiSBOwD'
            width='100%'
            height='400'
            // allowfullscreen=''
            style={{
              position: 'relative',
            }}
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
