'use client';

import React, { useEffect } from 'react';
import { ModalProduct } from '../modal-product';
import Banner from './Banner';
import Categories from './Categories';
import MenuItem from './MenuItem';
import NoBookmarks from './NoBookmarks';
import { useFilterProducts, useLocalStorage, useProducts } from '@/hooks';
import {
  useAppDispatch,
  addToBookmarks,
  setCurrentUser,
  useAppSelector,
} from '@/redux';
import { CATEGORIES } from '@/types';

const WRAPPER_CLASS = 'wrapper px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none';
const GRID_CLASS =
  'grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4';

const Menu: React.FC = () => {
  const products = useProducts();
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useAppDispatch();
  const { selectedCategory } = useAppSelector((state) => state.menuReducer);

  const filteredProducts = useFilterProducts(products);

  useEffect(() => {
    if (userInLS) {
      dispatch(addToBookmarks(userInLS.bookmarks));
      dispatch(setCurrentUser(userInLS));
    }
  }, [dispatch, userInLS]);

  const isBookmarksCategory = selectedCategory.value === CATEGORIES.BOOKMARKS;

  return (
    <>
      <Banner />
      <Categories />
      {filteredProducts?.length > 0 ? (
        <div className={WRAPPER_CLASS}>
          <ul className={GRID_CLASS}>
            {filteredProducts.map((product) => (
              <MenuItem
                key={product.id}
                product={product}
                products={products}
              />
            ))}
          </ul>
        </div>
      ) : (
        isBookmarksCategory && <NoBookmarks />
      )}
      <ModalProduct />
    </>
  );
};

export default Menu;
