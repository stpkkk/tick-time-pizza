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
  const handleClose = () => {
    dispatch(setIsProductsListModalOpen(false));
  };

  return (
    <div className='fixed inset-0 overflow-y-auto z-10 hidden sm:block'>
      <button
        className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
        type='button'
        onClick={handleClose}
      >
        <RiCloseFill size={36} className='md:w-7' />
      </button>
      <PromoProductsList promo={promo} />
    </div>
  );
};

export default ModalPromoProdutsList;
