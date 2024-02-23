import React from 'react';
import HeartIconGray from './HeartIconGray';
import HeartIconRed from './HeartIconRed';
import { useLocalStorage } from '@/hooks';
import { addToBookmarks } from '@/redux/features/menuSlice';
import { setCurrentUser } from '@/redux/features/profileSlice';
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
  const isUserSignIn = user && Object.keys(user).length > 0;
  const isBookmarked = bookmarks?.some((item) => item?.id === product?.id);

  const toggleBookmarked = async () => {
    if (isUserSignIn) {
      const updatedBookmarks = isBookmarked
        ? bookmarks.filter((bookmark) => bookmark?.id !== product?.id)
        : [...(bookmarks || []), product];

      const updatedUser = {
        ...userInLS,
        bookmarks: updatedBookmarks,
      };

      await setUserInLS(updatedUser);
      dispatch(setCurrentUser(updatedUser));
      dispatch(addToBookmarks(updatedBookmarks));
    } else {
      alert('Необходимо авторизоваться!');
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

export default ButtonBookmark;
