import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
import google from "../public/assets/images/Google.webp";
import apple from "../public/assets/images/App-Store.webp";

const Footer: React.FC = () => {
  return (
    <footer className="shadow-lg shadow-black">
      <div className="flex_between flex-wrap py-8 px-[60px] md:px-4 bg-white text-primary rounded-t-2xl md:flex-col-reverse md:justify-center">
        <div className="flex gap-2">
          <Image src={google} width={153} height={50} alt="Google Play" />
          <Image src={apple} width={153} height={50} alt="Apple Store" />
        </div>
        <ul className="flex_center gap-4 font-semibold">
          {footerLinks.map(link => (
            <li className="py-3" key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex_between gap-5 bg-secondary text-white text-[12px] py-7 px-16 md:px-4 md:flex-col sm:rounded-b-2xl">
        <div className="max-w-[700px] leading-4">
          <p>
            Добро пожаловать на сайт пиццерии Тик Тайм! Мы готовим и доставляем
            Пиццу с 2012 года! Мы готовим, быстро доставляем, дарим и едим
            любимую пиццу! Пиццерия Тик Тайм работает как небольшое заведение с
            доставкой по Вашему городу! Каждая Пицца готовится под заказ, и это
            занимает всего 10 минут!
          </p>
        </div>
        <div className="flex items-end flex-col gap-3 underline md:items-center">
          <Link href="/legal">Правовая информация</Link>
          <Link href="https://next-js-stpkkk-portfolio-git-ru-igorstepanov.vercel.app/">
            Поддержка сайта Степанов Игорь
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
