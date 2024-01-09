import React from 'react';
import HeartIconGray from './HeartIconGray';
import HeartIconRed from './HeartIconRed';
import { useLocalStorage } from '@/hooks';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

type ButtonBookmarkProps = {
  product: IProduct | null;
};

const ButtonBookmark: React.FC<ButtonBookmarkProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { bookmarks } = useAppSelector((state) => state.menuReducer);
  const { user } = useAppSelector((state) => state.profileReducer);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  const isBookmarked = false;
  // product && bookmarks?.some((item) => item.id === product.id);

  const toggleBookmarked = async () => {
    const updatedBookmarks = [...bookmarks, product];
    if (product) {
      if (isBookmarked) {
        dispatch(removeFromBookmarks(product.id));
      } else {
        dispatch(addToBookmarks(product));
        const updatedUser = {
          ...user,
          bookmarks: updatedBookmarks,
        };
        await setUserInLS(updatedUser);
      }
    }
  };

  console.log(userInLS.bookmarks);

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
