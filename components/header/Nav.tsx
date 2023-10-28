import React from 'react';
import { RiLoginCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Phone from './Phone';
import { navLinks } from '@/constants';
import { useAppSelector } from '@/redux/hooks';

type NavProps = {
  handleToggleMenu?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Nav: React.FC<NavProps> = ({ handleToggleMenu }) => {
  const pathname = usePathname();
  const { isNavOpen } = useAppSelector((state) => state.headerReducer);

  return (
    <nav className='font-semibold sm:flex sm:flex-col'>
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
            <li className='cursor-pointer p-2' key={link.key}>
              <Link
                className={`${isActive ? 'text-secondary' : ''}`}
                onClick={handleToggleMenu}
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
            href='/login'
            className='hidden sm:flex sm:cursor-pointer sm:items-center sm:gap-2 sm:p-2'
          >
            <div>Войти</div>
            <RiLoginCircleLine size={25} />
          </Link>
        </li>
        <li className='hidden sm:flex'>
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
