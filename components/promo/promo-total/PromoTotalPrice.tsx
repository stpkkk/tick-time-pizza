import React from 'react';

type PromoTotalProps = {
  addProductToCart: any;
  totalPrice: number;
  priceWithDiscount?: number | string;
  isQuantityMax: boolean;
};

const PromoTotalPrice: React.FC<PromoTotalProps> = ({
  addProductToCart,
  totalPrice,
  isQuantityMax,
  priceWithDiscount,
}) => {
  return (
    <>
      <div className='flex gap-2.5 sm:justify-center items-center text-sm justify-start my-8'>
        <span className='sm:font-semibold whitespace-nowrap text-xl font-bold'>
          {priceWithDiscount} ₽
        </span>
        {isQuantityMax ? (
          <span className='text-grayDark whitespace-nowrap text-base font-semibold line-through'>
            {totalPrice} ₽
          </span>
        ) : null}
      </div>
      <button
        className='btn_red min-h-[60px] sm:min-h-[50px] btn_disabled w-full uppercase'
        onClick={addProductToCart}
        type='button'
        disabled={!isQuantityMax}
      >
        Добавить в корзину
      </button>
    </>
  );
};

export default PromoTotalPrice;
