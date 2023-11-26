'use client';

import React from 'react';
import { ExtendedUser } from '@/types';

function useLocalStorage(initialValue: [] | ExtendedUser, key: string) {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [value, setValue] = React.useState(getValue);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
