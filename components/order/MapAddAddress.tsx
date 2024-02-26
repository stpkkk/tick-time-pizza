'use client';

import React from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

const MapAddAddress: React.FC = () => {
  return (
    <div className='w-full'>
      <YMaps>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
          width={990}
          height={430}
        >
          {/* You can add Placemark based on your address values */}
          <Placemark geometry={[55.75158, 37.573856]} />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapAddAddress;
