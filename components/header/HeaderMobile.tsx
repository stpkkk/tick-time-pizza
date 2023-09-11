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
    <header className='hidden fixed z-10 top-0 sm:block content_container drop-shadow-custom'>
      <div className='flex items-center px-4 shadow bg-white rounded-b-2xl h-[70px] relative'>
        <Logo />
        <div className='flex_center'>
          <HeaderCart />
          <button
            className='px-2 cursor-pointer'
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
