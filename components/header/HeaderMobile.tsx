import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Logo } from '../common';
import HeaderCart from './HeaderCart';
import Nav from './Nav';
import { useAppDispatch, useAppSelector, toggleNav } from '@/redux';

const HeaderMobile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isNavOpen } = useAppSelector((state) => state.menuReducer);

  const handleMenuToggle = () => {
    dispatch(toggleNav());
  };

  return (
    <header className='w-full px-[1rem] fixed top-0 z-20 hidden sm:block'>
      <div className='relative flex h-[70px] items-center rounded-b-2xl bg-white px-4 drop-shadow-custom'>
        <Logo />
        <div className='flex_center h-full'>
          <HeaderCart />
          <button
            className='px-2 cursor-pointer'
            type='button'
            onClick={handleMenuToggle}
          >
            {isNavOpen ? (
              <RiCloseFill size={40} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>
        </div>
        {isNavOpen ? <Nav onMenuToggle={handleMenuToggle} /> : null}
      </div>
    </header>
  );
};

export default HeaderMobile;
