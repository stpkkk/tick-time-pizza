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
        <span className='text-xl font-bold sm:font-semibold whitespace-nowrap'>
          {priceWithDiscount} ₽
        </span>
        {isQuantityMax ? (
          <span className='text-base font-semibold line-through text-grayDark whitespace-nowrap'>
            {totalPrice} ₽
          </span>
        ) : null}
      </div>
      <button
        className='btn_red btn_disabled w-full h-[60px]'
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
