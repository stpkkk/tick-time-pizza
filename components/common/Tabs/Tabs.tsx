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
  const [activeTab, setActiveTab] = React.useState(labelFirst);

  const handleTabClick = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };

  return (
    <div className='drop-shadow-custom flex flex-wrap w-full md:max-w-full'>
      <ul className='flex flex-wrap gap-x-2 flex-row' role='tablist'>
        <Tab
          label={labelFirst}
          isActive={activeTab === labelFirst}
          onClick={() => handleTabClick(labelFirst)}
        />
        <Tab
          label={labelSecond}
          isActive={activeTab === labelSecond}
          onClick={() => handleTabClick(labelSecond)}
        />
      </ul>

      <div className='relative flex flex-col flex-auto min-w-0 break-words bg-white w-full rounded-2xl rounded-tl-none px-[60px] py-[50px] sm:px-4 sm:py-8'>
        {activeTab === labelFirst && contentFirst}
        {activeTab === labelSecond && contentSecond}
      </div>
    </div>
  );
};

export default Tabs;
