import React from 'react';
import PromoTotalItem from './PromoTotalItem';
import { useAppSelector } from '@/redux/hooks';
import { generateUUID } from '@/utils';

const PromoTotal: React.FC = () => {
  const { promoProductsList, selectedPromo } = useAppSelector(
    (state) => state.menuReducer,
  );

  const totalPromoProductsQuantity = promoProductsList.reduce(
    (acc, product) => acc + (product.productQuantity || 0),
    0,
  );

  return (
    <div className='w-full max-w-[285px]'>
      <div className='rounded-2xl drop-shadow-custom h-auto overflow-hidden bg-white'>
        <form noValidate className='flex flex-col gap-30px'>
          <div className='flex_between bg-yellow px-[30px] py-5'>
            <span className='font-zheldor text-lg leading-5 uppercase'>
              Пицца
            </span>
            <span className='text-xs font-semibold text-right'>
              Выбрано:{' '}
              <span className='whitespace-nowrap'>
                {totalPromoProductsQuantity} из {selectedPromo?.maxValue}
              </span>
            </span>
          </div>
          <div className='flex flex-col gap-[30px] p-[30px]'>
            <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] sm:hidden'>
              Выберите необходимое количество товаров из каталога слева.
            </p>
            <div className='w-full sm:px-4 bg-white '>
              <ul className='flex flex-col gap-[30px]'>
                {promoProductsList.map((product) => (
                  <li className=' flex flex-col gap-2.5' key={generateUUID()}>
                    <PromoTotalItem
                      product={product}
                      totalPromoProductsQuantity={totalPromoProductsQuantity}
                    />
                  </li>
                ))}
              </ul>
              <div className='flex gap-2.5 sm:justify-center items-center text-sm justify-start my-8'>
                <span className='sm:font-semibold whitespace-nowrap font-bold text-xl'>
                  -799 ₽
                </span>
              </div>
              <button
                type='submit'
                disabled={
                  totalPromoProductsQuantity !== selectedPromo?.maxValue
                }
                className='bg-secondary hover:bg-secondaryLight text-white font-bold py-2 px-4 rounded-2xl disabled:text-grayDark sm:text-xs text-sm disabled:bg-gray w-full h-[60px] uppercase'
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromoTotal;
