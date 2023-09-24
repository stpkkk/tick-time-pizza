'use client';
import React from 'react';
import { useAppSelector } from '@/redux/hooks';

import { menu } from '@/constants';
import ProductItem from './ProductItem';
import NoBookmarks from './NoBookmarks';
import { Modal } from './modal';
import { IProduct } from '@/types';
import Banner from './Banner';
import Categories from './Categories';

const Menu: React.FC = () => {
  const { isModalOpen, selectedCategory, bookmarks } = useAppSelector(
    (state) => state.menuReducer,
  );

  function filterByCategoryTitle(menu: IProduct[], categoryTitle: string) {
    return menu.filter(
      (product) =>
        product.categories?.some(
          (category) => category.title === categoryTitle,
        ),
    );
  }

  const forChildrenArray = filterByCategoryTitle(menu, 'Подходит для Детей');
  const withoutMeatArray = filterByCategoryTitle(menu, 'Без Мяса');
  const hotArray = filterByCategoryTitle(menu, 'Острая');

  const getCategoryProducts = (category: string | number): IProduct[] => {
    switch (category) {
      case 'Избранное':
        return bookmarks;
      case 'Без Мяса':
        return withoutMeatArray;
      case 'Подходит для Детей':
        return forChildrenArray;
      case 'Острая':
        return hotArray;
      default:
        return menu;
    }
  };

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
