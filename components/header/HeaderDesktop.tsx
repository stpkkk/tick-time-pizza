import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiLoginCircleLine } from 'react-icons/ri';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Logo } from '../common';
import HeaderCart from './HeaderCart';
import Nav from './Nav';
import Phone from './Phone';
import ProgressBar from './ProgressBar';
import { setIsHoveringPhone, toggleNav } from '@/redux/features/headerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const HeaderDesktop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isHoveringPhone } = useAppSelector((state) => state.headerReducer);
  const session = useSession();

  const handleClick = () => {
    dispatch(toggleNav());
  };

  const handleMouseOverPhone = () => {
    dispatch(setIsHoveringPhone(true));
  };

  const handleMouseOutPhone = () => {
    dispatch(setIsHoveringPhone(false));
  };

  const PhoneTooltip = () => (
    <div className='header_tooltip left-0'>
      *минимальная сумма заказа на доставку равна стоимости средней пиццы.
    </div>
  );

  console.log(session);

  return (
    <header className='content_container fixed top-0 z-10 sm:hidden'>
      <div className='flex_center h-[90px] rounded-b-2xl bg-white px-[60px] drop-shadow-custom'>
        <Logo />
        <div className='text-sm md:relative md:ml-[20px] md:flex-grow'>
          <div className='header_dropdown' onClick={handleClick}>
            <span className='block font-semibold'>Меню</span>
            <IoIosArrowDown />
          </div>
          <div className='bottom-1 w-full md:absolute'>
            <Nav />
          </div>
        </div>
        <div
          className='relative ml-4 h-full hover:bg-grayLight'
          onMouseOver={handleMouseOverPhone}
          onMouseOut={handleMouseOutPhone}
        >
          <Phone />
          {isHoveringPhone ? <PhoneTooltip /> : null}
        </div>
        <Link
          href={`${session?.data ? '/account' : '/login'}`}
          className='flex_center ml-[28px] h-full w-[6rem] flex-col gap-2 hover:bg-grayLight'
        >
          <RiLoginCircleLine size={25} />
          <span className='text-sm font-semibold'>
            {session?.data ? 'Профиль' : 'Войти'}
          </span>
        </Link>
        <HeaderCart />
        <ProgressBar />
      </div>
    </header>
  );
};

export default HeaderDesktop;
