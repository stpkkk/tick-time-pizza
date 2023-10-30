'use client';

import React from 'react';
import { Modal } from '../modal';
import Banner from './Banner';
import Categories from './Categories';
import NoBookmarks from './NoBookmarks';
import ProductItem from './ProductItem';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';
import { getCategoryProducts } from '@/utils';

const Menu: React.FC = () => {
  const { isModalOpen, selectedCategory } = useAppSelector(
    (state) => state.menuReducer,
  );
  const productsToShow = getCategoryProducts(selectedCategory?.name || '');

  return (
    <>
      <Banner />
      <Categories />
      <div className='rounded-2xl bg-white px-[60px] py-[50px] drop-shadow-custom sm:p-0 sm:drop-shadow-none'>
        {productsToShow.length > 0 ? (
          <ul className='grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4'>
            {productsToShow.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <NoBookmarks />
        )}
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Menu;
