'use client';

import React from 'react';
import { Modal } from '../modal';
import Banner from './Banner';
import Categories from './Categories';
import NoBookmarks from './NoBookmarks';
import ProductItem from './ProductItem';
import { useCategoryProducts } from '@/hooks';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

const Menu: React.FC = () => {
  const { isModalOpen, selectedCategory } = useAppSelector(
    (state) => state.menuReducer,
  );
  const productsToShow: IProduct[] = useCategoryProducts(
    selectedCategory?.name || '',
  );

  return (
    <>
      <Banner />
      <Categories />
      {productsToShow.length > 0 ? (
        <div className='container px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none'>
          <ul className='grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4'>
            {productsToShow.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ) : (
        <NoBookmarks />
      )}
      {isModalOpen && <Modal />}
    </>
  );
};

export default Menu;
