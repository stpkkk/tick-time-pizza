'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ModalProduct } from '../modal-product';
import Banner from './Banner';
import Categories from './Categories';
import MenuItem from './MenuItem';
import NoBookmarks from './NoBookmarks';
import { useLocalStorage } from '@/hooks';
import {
  useAppDispatch,
  useAppSelector,
  addToBookmarks,
  setCurrentUser,
} from '@/redux';
import getCategoryProducts from '@/utils/getCategoryProducts';

const Menu: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useAppDispatch();
  const { selectedCategory, bookmarks } = useAppSelector(
    (state) => state.menuReducer,
  );
  const pathname = usePathname();
  const products = getCategoryProducts(
    selectedCategory.value,
    bookmarks,
    pathname,
  );

  React.useEffect(() => {
    if (userInLS) {
      dispatch(addToBookmarks(userInLS.bookmarks));
      dispatch(setCurrentUser(userInLS));
    }
  }, [dispatch, userInLS]);

  return (
    <>
      <Banner />
      <Categories />
      {products?.length > 0 ? (
        <div className='wrapper px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none'>
          <ul className='grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4'>
            {products?.map((product) => (
              <MenuItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ) : (
        <NoBookmarks />
      )}
      <ModalProduct />
    </>
  );
};

export default Menu;
