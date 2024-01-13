import React from 'react';
import HeartIconGray from './HeartIconGray';
import HeartIconRed from './HeartIconRed';
import { useLocalStorage } from '@/hooks';
import { addToBookmarks } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

type ButtonBookmarkProps = {
  product: IProduct;
};

const ButtonBookmark: React.FC<ButtonBookmarkProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  const isBookmarked = bookmarks?.some(
    (item: IProduct) => item.id === product.id,
  );

  const toggleBookmarked = async () => {
    const updatedBookmarks = isBookmarked
      ? bookmarks.filter((bookmark) => bookmark.id !== product.id)
      : [...bookmarks, product];
    const updatedUser = {
      ...userInLS,
      bookmarks: updatedBookmarks,
    };
    await setUserInLS(updatedUser);
    dispatch(addToBookmarks(updatedBookmarks));
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

export default ButtonBookmark;
