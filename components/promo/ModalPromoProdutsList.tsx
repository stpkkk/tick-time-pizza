import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import PromoProductsList from './PromoProductsList';
import { setIsProductsListModalOpen } from '@/redux/features/menuSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Promo } from '@/types';

type ModalPromoProdutsListProps = {
  promo?: Promo;
};

const ModalPromoProdutsList: React.FC<ModalPromoProdutsListProps> = ({
  promo,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setIsProductsListModalOpen(false));
  };

  return (
    <div className='relative z-10 hidden sm:block'>
      <div className='fixed inset-0 bg-black bg-opacity-25 opacity-100' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
          <div className='relative w-full max-w-[950px] scale-100 overflow-hidden rounded-2xl bg-white align-middle opacity-100 drop-shadow-custom transition-all sm:rounded-none'>
            <button
              className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
              type='button'
              onClick={handleClick}
            >
              <RiCloseFill size={36} className='md:w-7' />
            </button>
            <PromoProductsList promo={promo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPromoProdutsList;
