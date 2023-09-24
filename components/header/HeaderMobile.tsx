import React from 'react';
import { toggleNav } from '@/redux/features/headerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { RxHamburgerMenu } from 'react-icons/rx';
import Nav from './Nav';
import Logo from '../common/Logo';
import { RiCloseFill } from 'react-icons/ri';
import HeaderCart from './HeaderCart';

const HeaderMobile: React.FC = () => {
  const dispatch = useAppDispatch();
  const isNavOpen = useAppSelector((state) => state.headerReducer.isNavOpen);

  const handleToggleMenu = () => {
    dispatch(toggleNav());
  };

  return (
    <header className='content_container fixed top-0 z-10 hidden drop-shadow-custom sm:block'>
      <div className='relative flex h-[70px] items-center rounded-b-2xl bg-white px-4 shadow'>
        <Logo />
        <div className='flex_center'>
          <HeaderCart />
          <button
            className='cursor-pointer px-2'
            type='button'
            onClick={handleToggleMenu}
          >
            {isNavOpen ? (
              <RiCloseFill size={40} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>
        </div>
        {isNavOpen && <Nav />}
      </div>
    </header>
  );
};

export default HeaderMobile;
