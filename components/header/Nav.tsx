import React from 'react';
import { HiMiniUserCircle } from 'react-icons/hi2';
import { RiLoginCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Phone from './Phone';
import { navLinks } from '@/constants';
import { useAppSelector } from '@/redux';

type NavProps = {
  onMenuToggle?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Nav: React.FC<NavProps> = ({ onMenuToggle }) => {
  const pathname = usePathname();
  const { isNavOpen } = useAppSelector((state) => state.headerReducer);
  const { user } = useAppSelector((state) => state.profileReducer);

  return (
    <nav className='sm:flex sm:flex-col font-semibold'>
      <ul
        className={`${
          isNavOpen ? 'absolute p-6 sm:left-0 sm:top-[58px]' : 'md:hidden'
        } nav_links -z-10`}
      >
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== '/' && pathname.startsWith(link.href));

          return (
            <li className='p-2 cursor-pointer' key={link.key}>
              <Link
                className={`${isActive ? 'text-secondary' : ''}`}
                onClick={onMenuToggle}
                draggable='false'
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={!!user ? '/profile' : '/login'}
            className='sm:flex sm:cursor-pointer sm:items-center sm:gap-2 sm:p-2 hidden'
            onClick={onMenuToggle}
          >
            <>
              {!!user ? (
                <HiMiniUserCircle size={25} />
              ) : (
                <RiLoginCircleLine size={25} />
              )}
              <span className='text-sm font-semibold'>
                {!!user ? 'Профиль' : 'Войти'}
              </span>
            </>
          </Link>
        </li>
        <li className='sm:flex hidden'>
          <Phone />
        </li>
        <p className='hidden !text-[10px] text-xs font-normal normal-case sm:block'>
          *Минимальная сумма заказа на доставку без учета скидок — 545 рублей!
        </p>
      </ul>
    </nav>
  );
};

export default Nav;
