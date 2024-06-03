'use client';

import React from 'react';
import { ModalProduct } from '../modal-product';
import Banner from './Banner';
import Categories from './Categories';
import MenuItem from './MenuItem';
import NoBookmarks from './NoBookmarks';
import { useFilterProducts, useLocalStorage, useProducts } from '@/hooks';
import { useAppDispatch, addToBookmarks, setCurrentUser } from '@/redux';

const Menu: React.FC = () => {
  const products = useProducts();
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const dispatch = useAppDispatch();
  const filteredProducts = useFilterProducts(products);

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
      {filteredProducts?.length > 0 ? (
        <div className='wrapper px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none'>
          <ul className='grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4'>
            {filteredProducts?.map((product) => (
              <MenuItem
                key={product.id}
                product={product}
                products={products}
              />
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
