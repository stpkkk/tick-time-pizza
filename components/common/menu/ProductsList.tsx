import React from 'react';
import Loader from '../Loader';
import MenuItem from './MenuItem';
import NoBookmarks from './NoBookmarks';
import { useFilterProducts, useProducts } from '@/hooks';
import { useAppSelector } from '@/redux';
import { CATEGORIES, IProduct } from '@/types';

const WRAPPER_CLASS = 'wrapper px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none';

interface ProductsListProps {
  products: IProduct[];
  GRID_CLASS: string;
}

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  GRID_CLASS,
}) => {
  const { isLoading } = useProducts();
  const filteredProducts = useFilterProducts(products);
  const { selectedCategory } = useAppSelector((state) => state.menuReducer);
  const isBookmarksCategory = selectedCategory.value === CATEGORIES.BOOKMARKS;

  if (isLoading) {
    return (
      <div className='grid place-items-center min-h-[400px] w-[800px]'>
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
