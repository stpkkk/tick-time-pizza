import React from 'react';
import Loader from '../Loader';
import MenuItem from './MenuItem';
import NoBookmarks from './NoBookmarks';
import { useFilterProducts, useProducts } from '@/hooks';
import { useAppSelector } from '@/redux';
import { CATEGORIES } from '@/types';

const WRAPPER_CLASS = 'wrapper px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none';
const GRID_CLASS =
  'grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4';

const ProductsList = () => {
  const { products, isLoading } = useProducts();
  const filteredProducts = useFilterProducts(products);
  const { selectedCategory } = useAppSelector((state) => state.menuReducer);
  const isBookmarksCategory = selectedCategory.value === CATEGORIES.BOOKMARKS;

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-[400px]'>
        <Loader />
      </div>
    );
  }

  if (filteredProducts?.length > 0) {
    return (
      <div className={WRAPPER_CLASS}>
        <ul className={GRID_CLASS}>
          {filteredProducts.map((product) => (
            <MenuItem key={product.id} product={product} products={products} />
          ))}
        </ul>
      </div>
    );
  }

  if (isBookmarksCategory) {
    return <NoBookmarks />;
  }

  return null;
};

export default ProductsList;
