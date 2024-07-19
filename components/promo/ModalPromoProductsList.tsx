import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { CardList } from '../common';
import {
  useAppDispatch,
  setIsProductsListModalOpen,
  useAppSelector,
} from '@/redux';
import { IProduct } from '@/types';

type ModalPromoProductsListProps = {
  promoProducts: IProduct[];
};

const GRID_CLASS =
  'grid items-start justify-items-center gap-x-[30px] gap-y-[50px] sm:gap-y-5 smMin:grid-cols-2 mdMin:grid-cols-3 lgMin:grid-cols-4';

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
        <CardList products={promoProducts} GRID_CLASS={GRID_CLASS} />
      </div>
    </div>
  );
};

export default ModalPromoProductsList;
