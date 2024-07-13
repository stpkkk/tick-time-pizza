import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ProductsList } from '../common';
import {
  useAppDispatch,
  setIsProductsListModalOpen,
  useAppSelector,
} from '@/redux';
import { IProduct } from '@/types';

type ModalPromoProductsListProps = {
  promoProducts: IProduct[];
};

const ModalPromoProductsList: React.FC<ModalPromoProductsListProps> = ({
  promoProducts,
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
    <div className='sm:block fixed inset-0 z-10 hidden overflow-y-auto pt-[150px]'>
      <button
        className='fixed right-[35px] top-[140px] z-40 flex items-center gap-3 text-grayDark animate-fade-in hover:text-primary pointer'
        type='button'
        onClick={handleClose}
      >
        <RiCloseFill size={45} />
      </button>
      <div className='pt-[50px]'>
        <ProductsList products={promoProducts} />
      </div>
    </div>
  );
};

export default ModalPromoProductsList;
