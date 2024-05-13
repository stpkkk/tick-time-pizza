'use client';

import { useEffect, useState } from 'react';
import { IProduct } from '@/types';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      fetch('api/products')
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    fetchData();
  }, []);
  return [products];
};
