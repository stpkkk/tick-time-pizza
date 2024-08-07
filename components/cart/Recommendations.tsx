'use client';

import React, { useEffect } from 'react';
import { Loader, Tabs } from '../common';
import RecommendedList from './RecommendedList';
import { useProducts } from '@/hooks';
import { IProduct } from '@/types';

const Recommendations: React.FC = () => {
  const { products, isLoading } = useProducts();
  const [popular, setPopular] = React.useState<IProduct[]>([]);
  const sauces = products.filter((product) => product.group === 'sauces');

  useEffect(() => {
    const shuffledMenu = products.sort(() => 0.5 - Math.random());
    setPopular(shuffledMenu.slice(0, 8));
  }, [products]);

  if (isLoading || !sauces || !popular)
    return (
      <div className='flex_center w-full h-[600px] sm:h-[300px]'>
        <Loader />
      </div>
    );

  return (
    <>
      <h2 className='h1 my-10 ml-[60px] sm:my-4 sm:ml-4'>Рекомендуем:</h2>
      <Tabs
        labelFirst='Соусы'
        labelSecond='Популярное'
        contentFirst={<RecommendedList products={sauces} />}
        contentSecond={<RecommendedList products={popular} />}
      />
    </>
  );
};

export default Recommendations;
