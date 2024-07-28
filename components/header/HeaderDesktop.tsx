import React from 'react';
import { HiMiniUserCircle } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';
import { RiLoginCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import { Logo } from '../common';
import HeaderCart from './HeaderCart';
import Nav from './Nav';
import Phone from './Phone';
import ProgressBar from './ProgressBar';
import { useAuthStateChange } from '@/hooks';
import { useAppDispatch, useAppSelector, toggleNav } from '@/redux';

const HeaderDesktop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);
  const isUserSignIn = user && Object.keys(user).length > 0;

  const handleClick = () => {
    dispatch(toggleNav());
  };

  useAuthStateChange(user);

  return (
    <header className='fixed top-0 z-30 mx-auto w-full max-w-[1262px] px-[1rem] sm:hidden'>
      <div className='flex_center h-[90px] rounded-b-2xl bg-white px-[60px] drop-shadow-custom'>
        <Logo />
        <div className='text-sm md:relative md:ml-[20px] md:flex-grow'>
          <div
            className='hidden w-full max-w-[190px] sm:hidden md:flex md:h-[90px] md:items-center md:gap-2 md:pl-7'
            onClick={handleClick}
          >
            <span className='block font-semibold'>Меню</span>
            <IoIosArrowDown />
          </div>
          <div className='bottom-1 md:absolute w-full'>
            <Nav />
          </div>
        </div>
        <div className='group hover:bg-grayLight animate-fade-in relative h-full ml-4'>
          <Phone />

          <div className='group-hover:block header_tooltip left-0 hidden'>
            *минимальная сумма заказа на доставку равна стоимости средней пиццы.
          </div>
        </div>
        <Link
          href={isUserSignIn ? '/profile' : '/login'}
          className='flex_center animate-fade-in ml-[28px] h-full w-[6rem] flex-col gap-2 hover:bg-grayLight'
        >
          <>
            {isUserSignIn ? (
              <HiMiniUserCircle size={30} />
            ) : (
              <RiLoginCircleLine size={30} />
            )}
            <span className='text-sm font-semibold'>
              {isUserSignIn ? 'Профиль' : 'Войти'}
            </span>
          </>
        </Link>
        <HeaderCart />
        <ProgressBar />
      </div>
    </header>
  );
};

export default HeaderDesktop;
