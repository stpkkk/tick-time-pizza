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
      <div className='overlay' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='modal_inner max-w-[950px] sm:rounded-none flex_center min-h-full p-4 sm:items-stretch sm:p-0 sm:text-center'>
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
  );
};

export default ModalPromoProdutsList;
