import React from 'react';
import Loader from '../Loader';
import Card from './Card';
import NoBookmarks from './NoBookmarks';
import { useFilterProducts } from '@/hooks';
import { useAppSelector } from '@/redux';
import { CATEGORIES, IProduct } from '@/types';

const WRAPPER_CLASS = 'wrapper px-[60px] py-[50px] sm:p-0 sm:drop-shadow-none';

interface ICardListProps {
  products: IProduct[];
  GRID_CLASS: string;
  isLoading: boolean;
}

const CardList: React.FC<ICardListProps> = ({
  products,
  isLoading,
  GRID_CLASS,
}) => {
  const filteredProducts = useFilterProducts(products);
  const { selectedCategory } = useAppSelector((state) => state.menuReducer);
  const isBookmarksCategory = selectedCategory.value === CATEGORIES.BOOKMARKS;

  if (isLoading) {
    return (
      <div className='place-items-center grid w-full min-h-[calc(100vh-900px)] sm:min-h-[200px]'>
        <Loader />
      </div>
    );
  }

  if (filteredProducts?.length > 0) {
    return (
      <div className={WRAPPER_CLASS}>
        <ul className={GRID_CLASS}>
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} products={products} />
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

export default CardList;
