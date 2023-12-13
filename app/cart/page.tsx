'use client';

import React from 'react';
import {
  BackButton,
  Cart,
  CartTotal,
  ModalProduct,
  RecommendedProducts,
  Tabs,
} from '@/components';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

const CartPage: React.FC = () => {
  const { isModalProductOpen } = useAppSelector((state) => state.menuReducer);
  const [popularProducts, setPopularProducts] = React.useState<IProduct[]>([]);

  const sauces = menu.filter((product) => product.group === 'sauces');

  React.useEffect(() => {
    const shuffledMenu = menu.sort(() => 0.5 - Math.random());
    setPopularProducts(shuffledMenu.slice(0, 8));
  }, []);

  return (
    <main className='mt-[90px]'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <h1 className='title'>Корзина</h1>
      </div>
      <div className='flex justify-between flex-row md:flex-col gap-[30px]'>
        <div className='flex flex-col max-w-[calc(100%-420px)] md:max-w-full'>
          <Cart />
          <h2 className='title my-10 ml-[60px] sm:my-4 sm:ml-4'>
            Рекомендуем:
          </h2>
          <Tabs
            labelFirst='Соусы'
            labelSecond='Популярное'
            contentFirst={<RecommendedProducts products={sauces} />}
            contentSecond={<RecommendedProducts products={popularProducts} />}
          />
        </div>
        <CartTotal />
      </div>
      {isModalProductOpen && <ModalProduct />}
    </main>
  );
};

export default CartPage;
