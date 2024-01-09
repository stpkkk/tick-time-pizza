'use client';

import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { menu, pizzaOfTheDaySlides, promos, slides } from '@/constants';
import {
  setModalProductOpen,
  setSelectedProduct,
} from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Promos, Slide } from '@/types';

SwiperCore.use([Navigation]);

const Banner: React.FC = () => {
  const dispatch = useAppDispatch();
  const swiperRef = React.useRef<SwiperCore>();
  const router = useRouter();

  const [mounted, setMounted] = React.useState(false);

  const handleClick = (selectedSlide: Slide) => {
    const selectedProduct = menu.find(
      (product) => product.title === selectedSlide.title,
    );
    const isPizzaOfTheDaySlide = pizzaOfTheDaySlides.some(
      (slide) => slide.title === selectedSlide.title,
    );
    const pizzaOfTheDayId = promos.find(
      (promo) => promo.title === Promos.PIZZA_OF_THE_DAY,
    )?.id;

    if (selectedProduct) {
      dispatch(setSelectedProduct(selectedProduct));
    }

    if (isPizzaOfTheDaySlide) {
      router.push(`/promo/${pizzaOfTheDayId}`);
    } else {
      dispatch(setModalProductOpen(true));
    }
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='relative md:overflow-hidden mt-[120px] rounded-2xl sm:mt-[90px]'>
      {mounted ? (
        <>
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
                <div className='relative w-full max-h-[389px] max-w-[1230px] aspect-video cursor-pointer'>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    // placeholder='blur'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                    quality={100}
                    className='rounded-2xl'
                    onClick={() => handleClick(slide)}
                  />
                </div>
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
        </>
      ) : (
        <div className='grid place-items-center min-h-[389px]'>
          <CgSpinner
            size={70}
            className='text-yellow animate-spin sm:max-w-[40px] sm:h-[40px]'
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
