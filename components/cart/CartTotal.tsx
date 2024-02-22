import React from 'react';
import { useRouter } from 'next/navigation';
import Promocode from './Promocode';
import { setOrderPrice } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { calculateTotalPrice } from '@/utils';

const CartTotal: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const cartTotalPrice = calculateTotalPrice(cartProducts).totalPrice;
  const totalProducts = cartProducts?.reduce(
    (acc, product) => acc + (product.productQuantity ?? 0),
    0,
  );

  const discount = cartProducts?.reduce(
    (acc, product) =>
      acc +
      (product?.discount ?? 0) *
        ((product?.productQuantity && product?.productQuantity) || 0),
    0,
  );

  React.useEffect(() => {
    dispatch(setOrderPrice(cartTotalPrice));
  }, [dispatch, cartTotalPrice]);

  const handleCheckoutOrder = React.useCallback(
    async (e: React.FormEvent) => {
      //TODO set promoCode
      e.preventDefault();
      router.push('/cart/order');
    },
    [router],
  );

  return (
    <div className='wrapper flex_center flex-none flex-wrap w-[390px] h-[443px] md:w-full sm:py-8 py-[50px] px-[60px] sm:px-4'>
      <form className='flex flex-col gap-[30px]' onSubmit={handleCheckoutOrder}>
        <Promocode />
        <div>
          <span className='flex justify-between mb-4 text-xl font-bold'>
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
          type='submit'
          className='btn_red h-[60px] sm:h-[50px] btn_disabled w-full uppercase'
          disabled={cartTotalPrice || 0 > 0 ? false : true}
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
      </form>
    </div>
  );
};

export default CartTotal;
