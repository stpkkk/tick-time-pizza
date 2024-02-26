'use client';

import React from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

const MapPickPoints = () => {
  return (
    <div className='rounded-2xl sm:hidden w-full'>
      <YMaps>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
          width={1110}
          height={300}
        >
          <Placemark geometry={[55.75158, 37.573856]} />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapPickPoints;
