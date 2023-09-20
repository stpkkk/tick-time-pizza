'use client';
import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';

import Image from 'next/image';
import SwiperCore from 'swiper';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import pattern from '../../public/assets/icons/pattern.svg';
import slide1 from '../../public/assets/images/slider/slide-1.webp';
import slide2 from '../../public/assets/images/slider/slide-2.webp';
import slide3 from '../../public/assets/images/slider/slide-3.webp';
import slide4 from '../../public/assets/images/slider/slide-4.webp';
import slide5 from '../../public/assets/images/slider/slide-5.webp';
import slide6 from '../../public/assets/images/slider/slide-6.webp';
import slide7 from '../../public/assets/images/slider/slide-7.webp';
import slideWed from '../../public/assets/images/slider/slide-wed.webp';
import slideTh from '../../public/assets/images/slider/slide-th.webp';

import 'swiper/css/pagination';
import 'swiper/css';

SwiperCore.use([Navigation]);

const Banner = () => {
  const swiperRef = useRef<SwiperCore>();
  const slides = [
    { id: 0, image: slide1 },
    { id: 1, image: slide2 },
    { id: 2, image: slide3 },
    { id: 3, image: slide4 },
    { id: 4, image: slide5 },
    { id: 5, image: slide6 },
    { id: 6, image: slide7 },
    { id: 7, image: slideWed },
  ];

  return (
    <div className='relative rounded-2xl mt-[120px] sm:mt-[90px]'>
      <Swiper
        slidesPerView='auto'
        spaceBetween={40}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className='!overflow-visible'
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt='Акция в Тик Тайм'
              width={1230}
              height={389}
              placeholder='blur'
              blurDataURL={pattern.src}
              className='h-auto w-full rounded-2xl'
              quality={100}
              key={slide.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute top-1/2 -translate-y-1/2 left-[15px] z-[5] sm:hidden'>
        <button
          type='button'
          className='swiper-button-prev'
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label='previous-slide'
        >
          <IoIosArrowDropleftCircle
            size={30}
            className='text-grayLight opacity-90'
          />
        </button>
      </div>

      <div className='absolute top-1/2 -translate-y-1/2 right-[15px] z-[5] sm:hidden'>
        <button
          type='button'
          className='swiper-button-next'
          onClick={() => swiperRef.current?.slideNext()}
          aria-label='next-slide'
        >
          <IoIosArrowDroprightCircle
            size={30}
            className='text-grayLight opacity-90'
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
