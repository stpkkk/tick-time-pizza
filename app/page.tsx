'use client';

import React from 'react';
import { Menu } from '@/components';
import { useLocalStorage } from '@/hooks';
import { addToBookmarks } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Home: React.FC = () => {
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  // const [mounted, setMounted] = React.useState(false);

  const dispatch = useAppDispatch();
  const { selectedCategory } = useAppSelector((state) => state.menuReducer);

  React.useEffect(() => {
    dispatch(addToBookmarks(userInLS.bookmarks));
    // setMounted(true);
  }, [dispatch, userInLS.bookmarks]);

  return (
    <main>
      <Menu />
    </main>
  );
};

export default Home;
