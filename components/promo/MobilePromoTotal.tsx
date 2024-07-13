import React from 'react';
import { PromoSelectedProductsList } from './promo-total';
import {
  setIsProductsListModalOpen,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { IProduct } from '@/types';

interface MobilePromoTotalProps {
  isQuantityMax: boolean;
  promoProducts: IProduct[];
}

const MobilePromoTotal: React.FC<MobilePromoTotalProps> = ({
  isQuantityMax,
}) => {
  const dispatch = useAppDispatch();
  const { selectedPromoProducts, totalPromoProducts, isProductsListModalOpen } =
    useAppSelector((state) => state.menuReducer);

  const handleClickOpenProductsList = () => {
    dispatch(setIsProductsListModalOpen(true));
  };

  return (
    !isProductsListModalOpen && (
      <div className='hidden sm:block px-[30px] mb-[30px] w-full'>
        {selectedPromoProducts.length > 0 && (
          <div className='mb-[30px]'>
            <PromoSelectedProductsList />d
          </div>
        )}
        {!isQuantityMax ? (
          <>
            <span className='block mb-4 text-sm font-semibold'>
              Выберите {totalPromoProducts === 0 ? 'первый' : 'следующий'}{' '}
            </span>
            <button
              className='btn_red h-[60px] sm:h-[50px] max-w-[100px] !max-h-[35px]'
              onClick={handleClickOpenProductsList}
              type='button'
            >
              Выбрать
            </button>
          </>
        ) : null}
      </div>
    )
  );
};

export default MobilePromoTotal;
