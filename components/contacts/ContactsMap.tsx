import React, { FC } from 'react';

const ContactsMap: FC = () => {
  return (
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
      />
    </div>
  );
};

export default ContactsMap;
