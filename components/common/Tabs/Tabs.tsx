'use client';

import React from 'react';
import Tab from './Tab';

type TabsProps = {
  contentFirst: React.JSX.Element;
  contentSecond: React.JSX.Element;
  labelFirst: string;
  labelSecond: string;
};

const Tabs: React.FC<TabsProps> = ({
  contentFirst,
  contentSecond,
  labelFirst,
  labelSecond,
}) => {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='drop-shadow-custom flex flex-wrap w-full md:max-w-full'>
      <ul className='flex flex-wrap gap-x-2 flex-row' role='tablist'>
        <Tab
          label={labelFirst}
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <Tab
          label={labelSecond}
          isActive={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
      </ul>

      <div className='relative flex flex-col flex-auto min-w-0 break-words bg-white w-full rounded-2xl rounded-tl-none px-[60px] py-[50px] sm:px-4 sm:py-8'>
        {activeTab === 1 && contentFirst}
        {activeTab === 2 && contentSecond}
      </div>
    </div>
  );
};

export default Tabs;
