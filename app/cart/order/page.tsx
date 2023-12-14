import React from 'react';
import {
  ModalAddAddress,
  OrderSummary,
  BackButton,
  TabDelivery,
  TabPickup,
  Tabs,
} from '@/components';

const Order: React.FC = () => {
  return (
    <main className='mt-[90px]'>
      <form>
        <section>
          <div className='my-10 ml-6 flex flex-row gap-2 md:my-4 md:ml-4'>
            <BackButton />
            <h1 className='h1'>Оформление заказа</h1>
          </div>
          <Tabs
            contentFirst={<TabDelivery />}
            contentSecond={<TabPickup />}
            labelFirst='Доставка'
            labelSecond='Самовывоз'
          />
        </section>
        <OrderSummary />
      </form>
      <ModalAddAddress />
    </main>
  );
};

export default Order;
