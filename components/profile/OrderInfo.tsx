import React from 'react';
import { IOrder } from '@/types';

type OrderProps = {
  order: IOrder;
};

const OrderInfo: React.FC<OrderProps> = ({ order }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex_center w-full overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden '>
            <table className='w-full text-left text-sm font-light'>
              <tbody>
                <tr>
                  <td className='text-start whitespace-nowrap px-6 py-4 font-medium'>
                    К оплате:
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    {order.price}
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    Otto
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @mdo
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @mdo
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @mdo
                  </td>
                </tr>
                <tr>
                  <td className='text-start whitespace-nowrap px-6 py-4 font-medium'>
                    Способ оплаты:
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    {order.payMethod}
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    Thornton
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @fats
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @fat
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @fat
                  </td>
                </tr>
                <tr>
                  <td className='text-start whitespace-nowrap px-6 py-4 font-medium'>
                    Тикеты:
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    {order.tickets}
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    Wild
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                </tr>
                <tr>
                  <td className='text-start whitespace-nowrap px-6 py-4 font-medium'>
                    Cамовывоз:
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    {order.address}
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    Wildq
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                </tr>
                <tr>
                  <td className='text-start whitespace-nowrap px-6 py-4 font-medium'>
                    Заказ принят:
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    {order.deliveryTime}
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    Wild
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                </tr>
                <tr>
                  <td className='text-start whitespace-nowrap px-6 py-4 font-medium'>
                    Время готовности:
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    {order.deliveryTime}
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    Wild
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                  <td className='text-center whitespace-nowrap px-6 py-4'>
                    @twitter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
