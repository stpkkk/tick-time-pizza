'use client';

import React, { useRef } from 'react';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';
import Image from 'next/image';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import pattern from '../../public/assets/icons/pattern.svg';
import { slides } from '@/constants';

SwiperCore.use([Navigation]);

const Banner = () => {
  const swiperRef = useRef<SwiperCore>();

  const handleClick = () => {};

  return (
    <div className='relative mt-[120px] rounded-2xl sm:mt-[90px]'>
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
          <SwiperSlide key={index} onClick={handleClick}>
            <Image
              src={slide.image}
              alt='Акция в Тик Тайм'
              placeholder='blur'
              blurDataURL={pattern.src}
              className=' rounded-2xl h-full max-h-[389px] w-full max-w-[1230px]'
              quality={100}
              key={slide.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute left-[15px] top-1/2 z-[5] -translate-y-1/2 sm:hidden'>
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

      <div className='absolute right-[15px] top-1/2 z-[5] -translate-y-1/2 sm:hidden'>
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
