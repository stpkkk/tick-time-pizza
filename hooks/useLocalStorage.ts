'use client';

import React from 'react';
import { ExtendedUser } from '@/types';

function useLocalStorage(initialValue: ExtendedUser | [], key: string) {
  const isClient = typeof window !== 'undefined';

  const getValue = () => {
    if (isClient) {
      const storedItem = localStorage.getItem(key);
      if (storedItem) {
        return JSON.parse(storedItem);
      }
    }
    return initialValue;
  };

  const [value, setValue] = React.useState(() => getValue());

  React.useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [isClient, key, value]);

  return [value, setValue];
}

export default useLocalStorage;
