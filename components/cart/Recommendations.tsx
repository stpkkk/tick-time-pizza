'use client';

import React from 'react';
import { Tabs } from '../common';
import RecommendedProducts from './RecommendedProducts';
import { menu } from '@/constants';
import { IProduct } from '@/types';

const Recommendations: React.FC = () => {
  const [popularProducts, setPopularProducts] = React.useState<IProduct[]>([]);
  const sauces = menu.filter((product) => product.group === 'sauces');

  React.useEffect(() => {
    const shuffledMenu = menu.sort(() => 0.5 - Math.random());
    setPopularProducts(shuffledMenu.slice(0, 8));
  }, []);

  return (
    <>
      <h2 className='h1 my-10 ml-[60px] sm:my-4 sm:ml-4'>Рекомендуем:</h2>
      <Tabs
        labelFirst='Соусы'
        labelSecond='Популярное'
        contentFirst={<RecommendedProducts products={sauces} />}
        contentSecond={<RecommendedProducts products={popularProducts} />}
      />
    </>
  );
};

export default Recommendations;
