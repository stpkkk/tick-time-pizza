import React from 'react';

const Delivery: React.FC = () => {
  return (
    <div className='content_container min-h-[calc(100vh-268px)] mt-[90px] sm:pt-0'>
      <div className='px-[30px] sm:px-4'>
        <div className='h1 my-10 sm:my-4'>Доставка</div>
        <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold sm:mb-[30px] mb-[50px]'>
          Доставка еды и напитков всегда бесплатная!
        </p>
        <ul className='list-disc sm:mb-[30px] mb-[50px] px-4'>
          <li>Пицца приезжает всегда вкусная и горячая, прямиком из печи!</li>
          <li>
            Минимальная сумма заказа на доставку без учета скидок — 545 рублей!
          </li>
          <li>
            Доставка Пиццы в Петрозаводске осуществляется только в "Зоне
            доставки" (см. ниже);
          </li>
          <li>
            Оплатить заказ Вы можете наличными или по карте при получении, а
            также на сайте. <br />
            Не забудьте сообщить о способе оплаты диспетчеру или укажите его при
            заказе с сайта;
          </li>
          <li>
            Доставку можно оформить на грядущее событие и не беспокоиться о
            своевременности доставки предзаказа!
          </li>
          <li>
            Если вы хотите познакомиться с нами поближе, то заказ Вы сможете
            забрать сами! <br /> Мы будем очень рады Вас видеть! Адреса на
            карте!
          </li>
        </ul>
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
            src='https://yandex.ru/map-widget/v1/-/CCUEZHBfgD'
            width='100%'
            height='400'
            // allowfullscreen=''
            style={{ position: 'relative' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
