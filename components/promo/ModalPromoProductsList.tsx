import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import PromoProductsList from './PromoProductsList';
import {
  useAppDispatch,
  setIsProductsListModalOpen,
  useAppSelector,
} from '@/redux';
import { Promo } from '@/types';

type ModalPromoProductsListProps = {
  promo?: Promo;
};

const ModalPromoProductsList: React.FC<ModalPromoProductsListProps> = ({
  promo,
}) => {
  const dispatch = useAppDispatch();
  const { isProductsListModalOpen } = useAppSelector(
    (state) => state.menuReducer,
  );
  const handleClose = () => {
    dispatch(setIsProductsListModalOpen(false));
  };

  if (!isProductsListModalOpen) return;

  return (
    <div className='sm:block fixed inset-0 z-10 hidden overflow-y-auto'>
      <button
        className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark animate-fade-in hover:text-primary sm:right-0 sm:top-0 sm:p-1'
        type='button'
        onClick={handleClose}
      >
        <RiCloseFill size={36} className='md:w-7' />
      </button>
      <PromoProductsList promo={promo} />
    </div>
  );
};

export default ModalPromoProductsList;
