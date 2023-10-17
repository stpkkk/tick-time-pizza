import React from 'react';
import Counter from './Counter';
import { useLocalStorage } from '@/hooks';
import {
  addToCart,
  addToPromoProductsList,
  decrementProductQuantity,
  incrementProductQuantity,
  toggleModal,
} from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { calculateProductPrices } from '@/utils';

const ModalTotal: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    selectedProduct,
    additionalIngredients,
    selectedSize,
    removedIngredients,
    selectedDough,
    productQuantity,
    selectedPromo,
    promoProductsList,
  } = useAppSelector((state) => state.menuReducer);

  const [cartProductInLS, setCartProductInLS] = useLocalStorage([], 'cart');
  const maxValue = (selectedPromo && selectedPromo.maxValue) || 100;

  const addProductToCart = async () => {
    const updatedSelectedProduct = {
      ...selectedProduct,
      productQuantity,
      selectedSize,
      selectedDough,
      additionalIngredients,
      removedIngredients,
      uuid: crypto.randomUUID(),
    };

    const updatedCartProduct = [...cartProductInLS, updatedSelectedProduct];

    dispatch(addToPromoProductsList(updatedSelectedProduct));

    if (!selectedPromo) {
      dispatch(addToCart(updatedCartProduct));
      await setCartProductInLS(updatedCartProduct);
    }

    dispatch(toggleModal(false));
  };

  const totalProductPrice = calculateProductPrices(
    selectedProduct,
    selectedSize,
    additionalIngredients,
    productQuantity,
  ).totalProductPrice;

  const handleIncrement = () => {
    if (productQuantity < maxValue) dispatch(incrementProductQuantity());
  };

  const handleDecrement = () => {
    if (productQuantity > 1) dispatch(decrementProductQuantity());
  };

  console.log(promoProductsList);
  return (
    <div className='flex_center flex-col gap-[30px]'>
      <div className='flex_between w-full sm:flex-row-reverse sm:px-4'>
        <div className='flex_between w-full max-w-[128px] text-base sm:max-w-[96px]'>
          <Counter
            minValue={1}
            maxValue={maxValue}
            initialValue={1}
            value={productQuantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
        <div>
          <span className='text-xl font-semibold sm:text-base'>
            {totalProductPrice} ₽
          </span>
        </div>
      </div>
      <button className='btn_red' type='button' onClick={addProductToCart}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ModalTotal;
