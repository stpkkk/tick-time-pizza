'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import apple from '../public/assets/images/App-Store.webp';
import google from '../public/assets/images/Google.webp';
import { footerLinks } from '@/constants';

const AppFooter: React.FC = () => {
  const pathname = usePathname();
  const isPathnameStartsPromo = pathname.startsWith('/promo/');

  return (
    <footer
      className={`${
        isPathnameStartsPromo ? 'sm:hidden' : 'block '
      } w-full max-w-[1262px] px-[1rem] mt-[50px] drop-shadow-custom`}
    >
      <div className='flex_between rounded-t-2xl bg-white px-[60px] py-8 text-primary sm:flex-col-reverse md:px-4'>
        <div className='flex_center sm:gap-0 gap-2'>
          <Link href='https://play.google.com/store/apps/details?id=ru.sysdyn.ticktime'>
            <Image
              src={google}
              width={150}
              height={50}
              alt='Google Play'
              className='h-[50px] max-w-[150px]'
            />
          </Link>
          <Link href='https://apps.apple.com/ru/app/id1482770584'>
            <Image
              src={apple}
              width={150}
              height={50}
              alt='Apple Store'
              className='h-[50px] max-w-[150px]'
            />
          </Link>
        </div>
        <ul className='flex_center gap-4 font-semibold'>
          {footerLinks.map((link) => (
            <li
              className='whitespace-nowrap py-3 sm:text-[14px]'
              key={link.key}
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-between gap-5 bg-secondary px-16 py-7 text-[12px] text-white sm:flex-col sm:text-center md:px-4'>
        <div className='max-w-[700px]'>
          <p className='leading-4 md:text-[10px]'>
            Добро пожаловать на сайт пиццерии Тик Тайм! Мы готовим и доставляем
            Пиццу с 2012 года! Мы готовим, быстро доставляем, дарим и едим
            любимую пиццу! Пиццерия Тик Тайм работает как небольшое заведение с
            доставкой по Вашему городу! Каждая Пицца готовится под заказ, и это
            занимает всего 10 минут!
          </p>
        </div>
        <div className='whitespace-nowrap sm:items-center flex flex-col w-full gap-3 text-right underline'>
          <Link href='/legal' target='_blank'>
            Правовая информация
          </Link>
          <Link href='https://next-js-stpkkk-portfolio-git-ru-igorstepanov.vercel.app/'>
            Поддержка сайта Степанов Игорь
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
