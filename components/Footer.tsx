import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
import google from "../public/assets/images/Google.webp";
import apple from "../public/assets/images/App-Store.webp";

const Footer: React.FC = () => {
  return (
    <footer className="content_container drop-shadow-custom mt-[50px] sm:mb-4">
      <div className="flex_between py-8 px-[60px] md:px-4 bg-white text-primary sm:flex-col-reverse rounded-t-2xl ">
        <div className="flex_center sm:gap-0 gap-2">
          <Link
            href="https://play.google.com/store/apps/details?id=ru.sysdyn.ticktim"
            as="Google Store"
          >
            <Image
              src={google}
              width={150}
              height={50}
              alt="Google Play"
              className="max-w-[150px] h-[50px]"
            />
          </Link>
          <Link
            href="https://apps.apple.com/ru/app/id1482770584"
            as="Apple Store"
          >
            <Image
              src={apple}
              width={150}
              height={50}
              alt="Apple Store"
              className="max-w-[150px] h-[50px]"
            />
          </Link>
        </div>
        <ul className="flex_center gap-4 font-semibold">
          {footerLinks.map(link => (
            <li
              className="py-3 whitespace-nowrap sm:text-[14px]"
              key={link.key}
            >
              <Link href={link.href} as="about">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between gap-5 bg-secondary text-white text-[12px] py-7 px-16 md:px-4 sm:flex-col sm:rounded-b-2xl sm:text-center">
        <div className="max-w-[700px]">
          <p className="md:text-[10px] leading-4">
            Добро пожаловать на сайт пиццерии Тик Тайм! Мы готовим и доставляем
            Пиццу с 2012 года! Мы готовим, быстро доставляем, дарим и едим
            любимую пиццу! Пиццерия Тик Тайм работает как небольшое заведение с
            доставкой по Вашему городу! Каждая Пицца готовится под заказ, и это
            занимает всего 10 минут!
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 text-right underline sm:items-center whitespace-nowrap">
          <Link href="/legal" as="legal">
            Правовая информация
          </Link>
          <Link
            href="https://next-js-stpkkk-portfolio-git-ru-igorstepanov.vercel.app/"
            as="Igor Stepanov"
          >
            Поддержка сайта Степанов Игорь
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
