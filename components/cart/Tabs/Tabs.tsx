import React from 'react';
import PopularTab from './PopularTab';
import SauceTab from './SauceTab';

const Tabs: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className='flex flex-wrap drop-shadow-custom rounded-2xl'>
      <div className='w-full max-w-[calc(100%-420px)] md:max-w-full'>
        <ul className='flex flex-wrap gap-x-2 flex-row' role='tablist'>
          <li className='w-[256px] h-[60px] sm:w-[106px] sm:h-[40px]'>
            <a
              className={
                'flex_center text-xl font-bold block leading-5 bg-white rounded-t-2xl h-full sm:text-[0.645rem] sm:leading-[0.75rem] ' +
                (openTab === 1
                  ? 'bg-white'
                  : 'text-grayDark bg-gray hover:text-primary')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle='tab'
              href='#sauces'
              role='tablist'
            >
              Соусы
            </a>
          </li>
          <li className='w-[256px] h-[60px] sm:w-[106px] sm:h-[40px]'>
            <a
              className={
                'flex_center text-xl font-bold block leading-5 bg-white rounded-t-2xl h-full sm:text-[0.645rem] sm:leading-[0.75rem] ' +
                (openTab === 2
                  ? 'bg-white'
                  : 'text-grayDark bg-gray hover:text-primary')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle='tab'
              href='#popular'
              role='tablist'
            >
              Популярное
            </a>
          </li>
        </ul>

        <div className='relative flex flex-col min-w-0 break-words bg-white w-full rounded-2xl rounded-tl-none'>
          <div className='px-[60px] py-[50px] flex-auto sm:px-4 sm:py-8'>
            {openTab === 1 ? <SauceTab /> : ''}
            {openTab === 2 ? <PopularTab /> : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
