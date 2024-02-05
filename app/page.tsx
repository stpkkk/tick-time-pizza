'use client';

import React from 'react';
import { Menu, ModalNotice } from '@/components';
import { setModalNotice } from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setModalNotice(true));
  }, [dispatch]);

  return (
    <main>
      <Menu />
      <ModalNotice />
    </main>
  );
};

export default Home;
