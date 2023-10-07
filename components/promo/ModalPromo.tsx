import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import Image from 'next/image';
import pizza from '../../public/assets/icons/pizza.svg';
import { toggleModal } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getCurrentDay } from '@/utils';

const ModalPromo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPromo } = useAppSelector((state) => state.promoReducer);
  const currentDay = getCurrentDay();
  const isPizzaOfTheDay = selectedPromo!.title === 'Пицца дня.';
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      dispatch(toggleModal(false));
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleClickOutside]);

  const handleClick = () => {
    dispatch(toggleModal(false));
  };

  return (
    <div className='relative z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
          <div
            className='relative w-full max-w-[500px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all sm:rounded-none sm:p-8 sm:flex sm:flex-col sm:gap-[30px] sm:text-left'
            ref={modalRef}
          >
            <div className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 rounded-full bg-white p-1 sm:p-0 sm:bg-transparent sm:top-2 sm:right-2'>
              <button
                className=' text-grayDark hover:text-primary sm:right-0 sm:top-0'
                type='button'
                onClick={handleClick}
                tabIndex={0}
              >
                <RiCloseFill size={28} />
              </button>
            </div>
            <div className='h1 hidden sm:block'>
              {isPizzaOfTheDay
                ? selectedPromo!.title + ' ' + currentDay
                : selectedPromo!.title}
            </div>
            <Image
              src={selectedPromo!.image}
              alt={selectedPromo!.title}
              placeholder='blur'
              blurDataURL={pizza.src}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              width={500}
              height={282}
              className='aspect-square h-full max-h-[282px] w-full max-w-[500px] sm:max-h-[207px] sm:rounded-2xl'
            />
            <div className='px-[60px] py-[50px] sm:p-0'>
              <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] mb-[30px]'>
                {selectedPromo?.description}
              </p>
              {selectedPromo?.isRedirect && (
                <button
                  className='btn_yellow max-w-[100px] h-[45px] sm:h-[35px]'
                  type='button'
                >
                  Выбрать
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPromo;
