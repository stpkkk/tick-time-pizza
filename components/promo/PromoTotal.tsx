import React from 'react';

const PromoTotal: React.FC = () => {
  return (
    <div className='w-full max-w-[285px]'>
      <div className='rounded-2xl drop-shadow-custom h-auto overflow-hidden bg-white'>
        <form noValidate className='flex flex-col gap-30px'>
          <div className='flex_between bg-yellow px-[30px] py-5'>
            <span className='font-zheldor text-lg leading-5 uppercase'>
              Пицца
            </span>
            <span className='text-xs font-semibold text-right'>
              Выбрано: <span className='whitespace-nowrap'>0 из 2</span>
            </span>
          </div>
          <div className='flex flex-col gap-[30px] p-[30px]'>
            <p className='sm:text-xs sm:leading-[15px] text-sm leading-[17px] sm:hidden'>
              Выберите необходимое количество товаров из каталога слева.
            </p>
            <div className='w-full sm:px-4 bg-white '>
              <div className='flex gap-2.5 sm:justify-center items-center my-4 text-sm justify-start'>
                <span className='sm:font-semibold whitespace-nowrap font-bold text-xl'>
                  -799 ₽
                </span>
              </div>
              <button
                type='submit'
                disabled
                className='bg-secondary hover:bg-secondaryLight text-white font-bold py-2 px-4 rounded-2xl disabled:text-grayDark sm:text-xs text-sm disabled:bg-gray w-full h-[60px] uppercase mt-8'
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
