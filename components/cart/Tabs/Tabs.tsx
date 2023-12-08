import React from 'react';
import ProductList from './ProductList';
import Tab from './Tab';
import { Modal } from '@/components/modal';
import { menu } from '@/constants';
import { useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const [hydrated, setHydrated] = React.useState(false);
  const [popularProducts, setPopularProducts] = React.useState<IProduct[]>([]);

  const { isModalOpen } = useAppSelector((state) => state.menuReducer);
  const sauces = menu.filter((product) => product.group === 'sauces');

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  React.useEffect(() => {
    const shuffledMenu = menu.sort(() => 0.5 - Math.random());
    setPopularProducts(shuffledMenu.slice(0, 8));
  }, []);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <div className='container flex flex-wrap !bg-transparent'>
        <div className='w-full md:max-w-full'>
          <ul className='flex flex-wrap gap-x-2 flex-row' role='tablist'>
            <Tab
              label='Соусы'
              isActive={activeTab === 1}
              onClick={() => handleTabClick(1)}
            />
            <Tab
              label='Популярное'
              isActive={activeTab === 2}
              onClick={() => handleTabClick(2)}
            />
          </ul>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full rounded-2xl rounded-tl-none'>
            <div className='px-[60px] py-[50px] flex-auto sm:px-4 sm:py-8'>
              {activeTab === 1 && <ProductList products={sauces} />}
              {activeTab === 2 && <ProductList products={popularProducts} />}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Tabs;
