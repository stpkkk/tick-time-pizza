import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { calculateTotalPrice } from '@/utils';

const CartTotal: React.FC = () => {
  const [isPromoDisabled, setIsPromoDisabled] = React.useState(true);
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const cartTotalPrice = calculateTotalPrice(cartProducts).totalPrice;
  const totalProducts = cartProducts.reduce(
    (acc, product) => acc + (product.productQuantity ?? 0),
    0,
  );
  const discount = cartProducts.reduce(
    (acc, product) =>
      acc +
      (product?.discount ?? 0) *
        ((product?.productQuantity && product?.productQuantity) || 0),
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
    <div className='flex_center flex-none flex-wrap w-[390px] h-[443px] md:w-full drop-shadow-custom rounded-2xl sm:py-8 py-[50px] px-[60px] sm:px-4 bg-white'>
      <div className='flex flex-col gap-[30px]'>
        <form noValidate>
          <div className='relative md:w-full'>
            <input
              onChange={onInputChange}
              id='code'
              name='code'
              className='px-6 md:py-4 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-gray border-solid focus:outline-none focus:ring-0 focus:border-yellow disabled:border-grayDark h-[60px] !appearance-none hover:appearance-none pr-20'
            />
            <label
              htmlFor='code'
              className='absolute bg-white text-sm sm:text-xs text-grayDark font-semibold leading-3 duration-300 transform -translate-y-4 top-2 left-3.5 md:left-2.5 z-0 px-2.5 md:px-3.5'
            >
              Промокод
            </label>
            <button
              type='submit'
              className='btn_yellow max-w-[70px] disabled:bg-grayLight disabled:text-grayDark absolute sm:rounded-[13px] top-1 right-[3px] md:right-1 min-h-[52px]'
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
          <p className='flex justify-between sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-normal mb-2.5'>
            {totalProducts} товаров
            <span className='whitespace-nowrap'>{cartTotalPrice} ₽</span>
          </p>
          <p className='flex justify-between sm:text-xs sm:leading-[15px] text-sm leading-[17px] font-normal'>
            Скидка<span className='whitespace-nowrap'>{discount} ₽</span>
          </p>
        </div>
        <button
          type='button'
          className='btn_red w-full h-[60px] disabled:text-grayDark disabled:bg-grayLight'
          disabled={cartTotalPrice > 0 ? false : true}
        >
          Оформить заказ
        </button>
        <p className='text-[0.645rem] leading-[15px]'>
          С условиями оферты и политикой конфиденциальности можно ознакомиться,
          перейдя по этой{' '}
          <a target='_blank' className='underline' href='/legal'>
            ссылке
          </a>
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
