import React from 'react';
import { HiMiniUserCircle } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';
import { RiLoginCircleLine } from 'react-icons/ri';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { Logo } from '../common';
import HeaderCart from './HeaderCart';
import Nav from './Nav';
import Phone from './Phone';
import ProgressBar from './ProgressBar';
import { app_firebase } from '@/firebase';
import { useLocalStorage } from '@/hooks';
import { setIsHoveringPhone, toggleNav } from '@/redux/features/headerSlice';
import { setCurrentUser } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const HeaderDesktop: React.FC = () => {
  const auth = getAuth(app_firebase);

  const dispatch = useAppDispatch();
  const { isHoveringPhone } = useAppSelector((state) => state.headerReducer);
  const { user } = useAppSelector((state) => state.profileReducer);

  const handleClick = () => {
    dispatch(toggleNav());
  };

  const handleMouseOverPhone = () => {
    dispatch(setIsHoveringPhone(true));
  };

  const handleMouseOutPhone = () => {
    dispatch(setIsHoveringPhone(false));
  };

  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // User present
        dispatch(setCurrentUser(currentUser)); // Set user when authenticated
        await setUserInLS(currentUser);
        setUserInLS(currentUser);
      } else {
        // User not logged in
        dispatch(setCurrentUser(null));
        setUserInLS(null);
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [auth, dispatch, setUserInLS]);

  return (
    <header className='mx-auto w-full max-w-[1262px] px-[1rem] fixed top-0 z-10 sm:hidden'>
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
          {isHoveringPhone ? (
            <div className='header_tooltip left-0'>
              *минимальная сумма заказа на доставку равна стоимости средней
              пиццы.
            </div>
          ) : null}
        </div>
        <Link
          href={!!user ? '/profile' : '/login'}
          className='flex_center ml-[28px] h-full w-[6rem] flex-col gap-2 hover:bg-grayLight'
        >
          <>
            {!!user ? (
              <HiMiniUserCircle size={30} />
            ) : (
              <RiLoginCircleLine size={30} />
            )}
            <span className='text-sm font-semibold'>
              {!!user ? 'Профиль' : 'Войти'}
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
