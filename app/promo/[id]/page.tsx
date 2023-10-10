'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { BackButton, ProductItem } from '@/components';
import { menu, promos } from '@/constants';
import { IProduct } from '@/types';
import { getCurrentDay } from '@/utils';

type PromoProps = {
  params: {
    id: number;
  };
};

const Promo: React.FC<PromoProps> = ({ params: { id } }: PromoProps) => {
  const pathname = usePathname();
  const promo = promos.find((p) => p.id === +id);
  const currentDay = getCurrentDay();
  const isPizzaOfTheDay = promo?.title === 'Пицца дня.';

  const pepperoni = menu.filter(
    (product) => product.title === 'Пицца Пепперони',
  );
  const margarita = menu.filter(
    (product) => product.title === 'Пицца Маргарита',
  );

  const getPromoProducts = (title: string): IProduct[] => {
    switch (title) {
      case 'Для любителей Пепперони':
        return pepperoni;
      case 'Маргарита всегда со скидкой!':
        return margarita;
      default:
        return menu;
    }
  };

  const promoProducts = getPromoProducts(promo.title);

  return (
    <div className='content_container min-h-[calc(100vh-268px)] mt-[90px] sm:mt-[70px]'>
      <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        <BackButton />
        <div className='h1'>
          {isPizzaOfTheDay ? promo.title + ' ' + currentDay : promo?.title}
        </div>
      </div>
      <div className='flex flex-col gap-[30px] rounded-2xl bg-white px-[60px] py-[50px] drop-shadow-custom sm:px-4 sm:py-8'>
        {promoProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Promo;
