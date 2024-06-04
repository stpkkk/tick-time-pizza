'use client';

import { useEffect, useState } from 'react';
import { IProduct } from '@/types';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    console.error('Error fetching products:', error);
  }

  return products;
};
