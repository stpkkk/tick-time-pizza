import React from 'react';
import PromoTotalItem from './PromoTotalItem';
import { setTotalPromoProductsQuantity } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Prices, Promo, Promos } from '@/types';
import {
  calculateTotalPrice,
  calculateProductPrices,
  generateUUID,
} from '@/utils';

type PromoTotalProps = {
  promo?: Promo;
};

const PromoTotal: React.FC<PromoTotalProps> = ({ promo }) => {
  const dispatch = useAppDispatch();
  const {
    totalPromoProductsQuantity,
    promoProductsList,
    selectedProduct,
    selectedSize,
    productQuantity,
  } = useAppSelector((state) => state.menuReducer);

  const { totalPrice } = calculateTotalPrice(promoProductsList);
  const { productPrice } = calculateProductPrices(
    selectedProduct,
    selectedSize,
    [],
    productQuantity,
  );
  const isQuantityMax = totalPromoProductsQuantity === promo?.maxValue;

  const fourBigPizzasPrice =
    (productPrice && totalPrice - productPrice) ?? '-' + Prices.BIG;
  const pizzaDiscount100 = (productPrice && totalPrice - 100) ?? -100;

  const getPriceWithDiscount = (promoTitle: string) => {
    switch (promoTitle) {
      case Promos.FOUR_BIG_PIZZAS:
        return fourBigPizzasPrice;
      case Promos.PIZZA_OF_THE_DAY:
        return pizzaDiscount100;
      case Promos.PEPPERONI:
        return Prices.TWO_BIG_PEPPERONIES;
      case Promos.MARGARITA:
        return pizzaDiscount100;
      case Promos.THREE_PIZZAS_999:
        return Prices.THREE_SMALL_PIZZAS;
      case Promos.DINNER_PIZZA:
        return Prices.TWO_MEDIUM_DINNER_PIZZAS;
    }
  };

  const priceWithDiscount = getPriceWithDiscount(promo?.title || '');

  React.useEffect(() => {
    const newTotalQuantity = promoProductsList.reduce(
      (acc, product) => acc + (product.productQuantity || 0),
      0,
    );
    dispatch(setTotalPromoProductsQuantity(newTotalQuantity));
  }, [promoProductsList, dispatch]);

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
                {totalPromoProductsQuantity} из {promo?.maxValue}
              </span>
            </span>
          </div>
          <div className='flex flex-col gap-[30px] p-[30px]'>
            {!isQuantityMax && (
              <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] sm:hidden'>
                Выберите необходимое количество товаров из каталога слева.
              </p>
            )}
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
                  {priceWithDiscount} ₽
                </span>
                {isQuantityMax ? (
                  <span className='line-through text-grayDark font-semibold whitespace-nowrap text-base'>
                    {totalPrice} ₽
                  </span>
                ) : null}
              </div>
              <button
                type='submit'
                disabled={!isQuantityMax}
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
