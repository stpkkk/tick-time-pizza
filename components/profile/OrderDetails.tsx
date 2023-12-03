import React from 'react';
import { IOrder } from '@/types';

type OrderProps = {
  order: IOrder;
};

const OrderDetails: React.FC<OrderProps> = ({ order }) => {
  return (
    <div className='flex justify-between gap-[30px] w-full md:flex-wrap'>
      <table className='max-w-[50%] w-full md:max-w-full'>
        <tbody className='flex flex-col gap-4  w-full'>
          <tr className='grid grid-cols-2 gap-2.5 whitespace-nowrap'>
            <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              К оплате:
            </td>
            <td className='md:text-xs md:leading-[15px] text-base leading-5'>
              {order.orderPrice} ₽
            </td>
          </tr>
          <tr className='grid grid-cols-2 gap-2.5'>
            <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              Способ оплаты:
            </td>
            <td className='md:text-xs md:leading-[15px] text-base leading-5'>
              {order.payMethod}
            </td>
          </tr>
          <tr className='grid grid-cols-2 gap-2.5'>
            <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              Тикеты:
            </td>
            <td className='md:text-xs md:leading-[15px] text-base leading-5'>
              {order.tickets}
            </td>
          </tr>
          <tr className='grid grid-cols-2 gap-2.5'>
            <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              Доставка по адресу:
            </td>
            <td className='md:text-xs md:leading-[15px] text-base leading-5'>
              {order.address}
            </td>
          </tr>
          <tr className='grid grid-cols-2 gap-2.5'>
            <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              Заказ принят:
            </td>
            <td className='md:text-xs md:leading-[15px] text-base leading-5'>
              {order.time}
            </td>
          </tr>
          <tr className='grid grid-cols-2 gap-2.5'>
            <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
              Время доставки:
            </td>
            <td className='md:text-xs md:leading-[15px] text-base leading-5'>
              40 минут
            </td>
          </tr>
        </tbody>
      </table>
      <table className='max-w-[50%] w-full md:max-w-full'>
        <tbody className='flex_start flex-col gap-16 md:gap-8'>
          {order.products.map((product) => (
            <tr className='flex justify-between gap-24 w-full' key={product.id}>
              <td className='flex flex-col gap-2 mr-auto'>
                <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold '>
                  {product.title}
                </span>
                {product.selectedSize?.name && product.selectedDough?.name && (
                  <p className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
                    {`${product.selectedSize?.name},${product.selectedDough?.name}`}
                  </p>
                )}
                {product.selectedIngredients &&
                  product.selectedIngredients.length > 0 && (
                    <ul className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
                      Добавить:{' '}
                      {product.selectedIngredients?.map((ing) => (
                        <li
                          className='inline'
                          key={ing.id}
                        >{`${ing.name} (${ing.quantity}шт.), `}</li>
                      ))}
                    </ul>
                  )}
                {product.removedIngredients &&
                  product.removedIngredients.length > 0 && (
                    <ul className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
                      Убрать:{' '}
                      {product.removedIngredients?.map((ing) => (
                        <li
                          className='inline'
                          key={ing.id}
                        >{`${ing.name}, `}</li>
                      ))}
                    </ul>
                  )}
              </td>
              <td className='whitespace-nowrap md:text-xs md:leading-[15px] text-base leading-5'>
                {product.productQuantity} шт.
              </td>
              <td className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold whitespace-nowrap'>
                {product.totalPrice} ₽
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
