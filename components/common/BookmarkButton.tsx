import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addToBookmarks,
  removeFromBookmarks,
  setHoveredItemId,
} from '@/redux/features/menuSlice';

import HeartIconRed from './HeartIconRed';
import HeartIconGray from './HeartIconGray';
import { IProduct } from '@/types';

type BookmarkButtonProps = {
  product: IProduct | null;
};

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector((state) => state.menuReducer.bookmarks);

  const isBookmarked =
    product && bookmarks?.some((item) => item.id === product.id);

  const toggleBookmarked = () => {
    if (product) {
      if (isBookmarked) {
        dispatch(removeFromBookmarks(product.id));
        dispatch(setHoveredItemId(null));
      } else {
        dispatch(addToBookmarks(product));
        dispatch(setHoveredItemId(null));
      }
    }
  };

  return (
    <button
      className='cursor-pointer'
      onClick={toggleBookmarked}
      type='button'
      title='Добавить в избранное'
    >
      {isBookmarked ? <HeartIconRed /> : <HeartIconGray />}
    </button>
  );
};

export default BookmarkButton;
