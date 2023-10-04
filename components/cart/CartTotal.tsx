import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { calculateCartTotalPrice } from '@/utils';


const CartTotal: React.FC = () => {
  const [isPromoDisabled, setIsPromoDisabled] = React.useState(true);
  const cartProducts = useAppSelector(
    (state) => state.menuReducer.cartProducts,
  );
  const cartTotalPrice = calculateCartTotalPrice(cartProducts).cartTotalPrice;
  const totalProducts = cartProducts.reduce(
    (acc, product) => acc + (product.productQuantity ?? 0),
    0,
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim() === '') {
      setIsPromoDisabled(true);
    } else {
      setIsPromoDisabled(false);
    }
  };

  return (
    <div className='flex flex-wrap drop-shadow-custom rounded-2xl w-full sm:py-8 py-[50px] px-[60px] sm:px-4 bg-white'>
      <div className='flex flex-col gap-[30px]'>
        <form noValidate>
          <div className='relative sm:w-full'>
            <input
              onChange={onInputChange}
              id='code'
              name='code'
              className='px-6 md:py-4 py-[21px] w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-grayDark border-solid focus:outline-none focus:ring-0 focus:border-yellow disabled:border-grayDark h-[60px] !appearance-none hover:appearance-none pr-20'
            />
            <label
              htmlFor='code'
              className='absolute bg-white text-sm sm:text-xs text-grayDark font-semibold leading-3 duration-300 transform -translate-y-4 top-2 left-3.5 md:left-2.5 z-0 origin-[0] px-2.5 md:px-3.5'
            >
              Промокод
            </label>
            <button
              type='submit'
              className='bg-yellow hover:bg-yellowLight font-bold py-2 px-6 rounded-2xl text-sm disabled:bg-gray absolute sm:rounded-[13px] top-1 right-[3px] md:right-1 uppercase md:px-6 h-[52px]'
              disabled={isPromoDisabled}
            >
              ок
            </button>
          </div>
        </form>
        <div>
          <span className='flex justify-between text-xl font-bold mb-4'>
            Сумма заказа:
            <span className='whitespace-nowrap'>{cartTotalPrice} ₽</span>
          </span>
          <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] flex justify-between font-normal mb-2.5'>
            {totalProducts} товаров
            <span className='whitespace-nowrap'>{cartTotalPrice} ₽</span>
          </p>
          <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] flex justify-between font-normal'>
            Скидка<span className='whitespace-nowrap'>0 ₽</span>
          </p>
        </div>
        <button
          type='button'
          className='bg-secondary hover:bg-secondaryLight text-white font-bold py-2 px-4 rounded-2xl disabled:text-grayDark sm:text-xs text-sm disabled:bg-gray w-full h-[60px] uppercase flex_center'
          disabled={cartTotalPrice > 0 ? false : true}
        >
          Оформить заказ
        </button>
        <p className='text-[0.645rem] leading-[15px]'>
          С условиями оферты и политикой конфиденциальности можно ознакомиться,
          перейдя по этой
          <a target='_blank' className='underline' href='/legal'>
            ссылке
          </a>
        </p>
      </div>
    </div>
  );
};

export default CartTotal;