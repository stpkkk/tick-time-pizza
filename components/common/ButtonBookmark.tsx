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
  const { user } = useAppSelector((state) => state.profileReducer);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  const isBookmarked = bookmarks?.some(
    (item: IProduct) => item.id === product.id,
  );

  const toggleBookmarked = async () => {
    // if (true) {
    const updatedBookmarks = [...bookmarks, product];
    dispatch(addToBookmarks(updatedBookmarks));
    const updatedUser = {
      ...userInLS,
      bookmarks: updatedBookmarks,
    };
    await setUserInLS(updatedUser);
    // }
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
