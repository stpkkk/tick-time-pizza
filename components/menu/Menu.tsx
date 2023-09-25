'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
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
    (state) => state.menuReducer
  );
  const pathname = usePathname();
  // console.log(pathname);

  const pizzasMenu = menu.filter((item) => item.group === 'pizzas');
  const snacksMenu = menu.filter((item) => item.group === 'snacks');
  const drinksMenu = menu.filter((item) => item.group === 'drinks');
  const desertsMenu = menu.filter((item) => item.group === 'desserts');

  const forChildrenArray = filterByCategoryTitle(menu, 'Подходит для Детей');
  const withoutMeatArray = filterByCategoryTitle(menu, 'Без Мяса');
  const hotArray = filterByCategoryTitle(menu, 'Острая');

  function filterByCategoryTitle(menu: IProduct[], categoryTitle: string) {
    return menu.filter((product) =>
      product.categories?.some((category) => category.title === categoryTitle)
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
      <div className='py-[50px] px-[60px] bg-white rounded-2xl drop-shadow-custom sm:drop-shadow-none sm:p-0'>
        {productsToShow.length > 0 ? (
          <ul className='grid smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4 justify-items-center items-start gap-y-[50px] gap-x-[30px] sm:gap-y-5'>
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
