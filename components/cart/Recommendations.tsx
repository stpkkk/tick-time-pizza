'use client';

import React from 'react';
import { Tabs } from '../common';
import RecommendedList from './RecommendedList';
import { useProducts } from '@/hooks';
import { IProduct } from '@/types';

const Recommendations: React.FC = () => {
  const products = useProducts();
  const [popular, setPopular] = React.useState<IProduct[]>([]);
  const sauces = products.filter((product) => product.group === 'sauces');

  React.useEffect(() => {
    const shuffledMenu = products.sort(() => 0.5 - Math.random());
    setPopular(shuffledMenu.slice(0, 8));
  }, [products]);

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
