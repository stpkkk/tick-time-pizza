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
  product: IProduct;
};

const ButtonBookmark: React.FC<ButtonBookmarkProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { bookmarks, selectedCategory } = useAppSelector(
    (state) => state.menuReducer,
  );
  const { user } = useAppSelector((state) => state.profileReducer);
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  const isBookmarked =
    product &&
    userInLS.bookmarks?.some((item: IProduct) => item.id === product.id);

  React.useEffect(() => {
    if (isBookmarked) {
      dispatch(addToBookmarks(product));
    }
  }, [dispatch, isBookmarked, product, selectedCategory]);

  const toggleBookmarked = async () => {
    if (isBookmarked) {
      const updatedBookmarks = userInLS.bookmarks?.filter(
        (item: IProduct) => item.id !== product.id,
      );
      const updatedUser = {
        ...userInLS,
        bookmarks: updatedBookmarks,
      };
      await setUserInLS(updatedUser);
      dispatch(removeFromBookmarks(product.id));
    } else {
      const updatedUser = {
        ...userInLS,
        bookmarks: [...bookmarks, product],
      };
      await setUserInLS(updatedUser);
      dispatch(addToBookmarks(product));
    }
  };

  // const toggleBookmarked = async () => {
  //   if (isBookmarked) {
  //     const updatedBookmarks = [...bookmarks, product];
  //     dispatch(removeFromBookmarks(product.id));
  //     userInLS.bookmarks?.filter(
  //       (item: IProduct) => item.title !== product.title,
  //     );
  //     const updatedUser = {
  //       ...user,
  //       bookmarks: updatedBookmarks,
  //     };
  //     await setUserInLS(updatedUser);
  //   } else {
  //     dispatch(addToBookmarks(product));
  //     const updatedBookmarks = [...bookmarks, product];
  //     const updatedUser = {
  //       ...user,
  //       bookmarks: updatedBookmarks,
  //     };
  //     await setUserInLS(updatedUser);
  //   }
  // };

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
