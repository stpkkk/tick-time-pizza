'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Modal } from '../modal';
import Banner from './Banner';
import Categories from './Categories';
import NoBookmarks from './NoBookmarks';
import ProductItem from './ProductItem';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';


const Menu: React.FC = () => {
  const { isModalOpen, selectedCategory, bookmarks } = useAppSelector(
    (state) => state.menuReducer,
  );
  const pathname = usePathname();

  const pizzasMenu = menu.filter((item) => item.group === 'pizzas');
  const snacksMenu = menu.filter((item) => item.group === 'snacks');
  const drinksMenu = menu.filter((item) => item.group === 'drinks');
  const desertsMenu = menu.filter((item) => item.group === 'desserts');

  const forChildrenArray = filterByCategoryTitle(menu, 'Подходит для Детей');
  const withoutMeatArray = filterByCategoryTitle(menu, 'Без Мяса');
  const hotArray = filterByCategoryTitle(menu, 'Острая');

  function filterByCategoryTitle(menu: IProduct[], categoryTitle: string) {
    return menu.filter(
      (product) =>
        product.categories?.some(
          (category) => category.title === categoryTitle,
        ),
    );
  }

  const getGroupProducts = (pathname: string): IProduct[] => {
    switch (pathname) {
      case '/snacks':
        return snacksMenu;
      case '/drinks':
        return drinksMenu;
      case '/desserts':
        return desertsMenu;
      default:
        return pizzasMenu;
    }
  };

  const productsGroup = getGroupProducts(pathname);

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
        return productsGroup;
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