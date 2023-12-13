import React from 'react';

const OrderSummary: React.FC = () => {
  return (
    <section>
      <h2 className='h1 my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
        Ваш заказ
      </h2>
      <div className='container flex justify-between flex-wrap w-full px-[60px] py-[50px] sm:px-4 sm:py-8 '>
        <div className='flex flex-col gap-[30px] w-1/2 sm:w-full'>
          <div>
            <h3 className='h3 mb-4'>Самовывоз</h3>
            <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              Пр-т Ленина 35
            </span>
          </div>
          <div>
            <h2 className='h3 mb-4'>Состав заказа</h2>
          </div>
          <ul>{}</ul>
        </div>
        <div className='flex flex-col gap-[30px] w-1/2 sm:w-full'>
          <div>
            <h3 className='h3 mb-4'>Комментарий к заказу</h3>
            <textarea
              className='block px-6 sm:py-4 py-[21px] w-full sm:text-xs text-sm leading-4 sm:leading-[15px] font-semibold bg-transparent rounded-2xl border border-primary border-solid appearance-none focus:outline-none focus:ring-0 focus:border-accent disabled:border-dark-light peer resize-none'
              name='comment'
              id='comment'
              rows={5}
            ></textarea>
          </div>
          <div>
            <h3 className='h3 mb-4'>Использовать тикеты</h3>
            <input
              className='block px-6 sm:py-4 py-[21px] w-full sm:text-xs text-sm md:leading-4 font-semibold bg-transparent rounded-2xl border border-primary border-solid appearance-none focus:outline-none focus:ring-0 focus:border-accent disabled:border-gray peer mb-4'
              type='text'
            />
            <p className='sm:text-xs text-sm italic'>Доступно: 0 из 18</p>
          </div>
          <div>
            <p className='font-bold sm:marker:text-xl leading-5 text-3xl mb-5 sm:mb-2.5'>
              К оплате: 399 ₽
            </p>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold mb-5 sm:mb-2.5'>
              Тикетов будет начислено: 12
            </p>
            <p className='sm:text-xs sm:leading-[15px] text-base leading-5 font-semibold'>
              Скидка: 0 ₽
            </p>
          </div>
          <div className='flex justify-between gap-6 sm:gap-4 sm:flex-col'>
            <button className='btn_red max-w-[235px]' type='submit'>
              Заказать
            </button>
            <p className='sm:text-xs text-sm italic md:max-w-[340px]'>
              С условиями оферты и политикой конфиденциальности можно
              ознакомиться, перейдя по этой{' '}
              <a target='_blank' className='underline' href='/legal'>
                ссылке
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
