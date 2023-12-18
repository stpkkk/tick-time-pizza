import React from 'react';
import { useRouter } from 'next/navigation';
import Promocode from './Promocode';
import { useLocalStorage } from '@/hooks';
import { addToCart } from '@/redux/features/menuSlice';
import {
  addToOrders,
  setCurrentUser,
  setOrderPrice,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExtendedUser } from '@/types';
import { calculateTotalPrice, getFormattedDateTime } from '@/utils';

const CartTotal: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.menuReducer);
  const { user, orders, orderPrice } = useAppSelector(
    (state) => state.profileReducer,
  );
  const cartTotalPrice = calculateTotalPrice(cartProducts).totalPrice;
  const { formattedDate, formattedTime } = getFormattedDateTime();
  const totalProducts = cartProducts?.reduce(
    (acc, product) => acc + (product.productQuantity ?? 0),
    0,
  );

  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');

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
      e.preventDefault();

      const randomId = Math.floor(
        Math.random() * (Math.floor(9999) - Math.ceil(1000)) + Math.ceil(1000),
      ).toString();

      const updatedOrder = {
        ...orders,
        id: randomId,
        products: cartProducts,
        date: formattedDate,
        time: formattedTime,
        orderPrice,
        //! addresses: []
      };
      dispatch(addToOrders([...orders, updatedOrder]));

      const updatedUser: ExtendedUser = {
        ...user,
        orders: [...orders, updatedOrder],
      };

      router.push('/cart/order');
      dispatch(setCurrentUser(updatedUser));
      dispatch(addToCart([]));
      await setUserInLS(updatedUser);
      await setCartProductInLS([]);
    },
    [
      orders,
      cartProducts,
      formattedDate,
      formattedTime,
      orderPrice,
      dispatch,
      user,
      router,
      setUserInLS,
      setCartProductInLS,
    ],
  );

  return (
    <div className='container flex_center flex-none flex-wrap w-[390px] h-[443px] md:w-full sm:py-8 py-[50px] px-[60px] sm:px-4'>
      <form className='flex flex-col gap-[30px]' onSubmit={handleCheckoutOrder}>
        <Promocode />
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
          type='submit'
          className='btn_red btn_disabled w-full h-[60px]'
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
