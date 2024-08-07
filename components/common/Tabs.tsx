'use client';

import React from 'react';
import Loader from './Loader';
import Tab from './Tab';
import { useAppDispatch, useAppSelector, setOrderFormData } from '@/redux';
import { Supply } from '@/types';

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
  const dispatch = useAppDispatch();
  const { orderFormData } = useAppSelector((state) => state.profileReducer);
  const [activeTab, setActiveTab] = React.useState(labelFirst);

  const handleTabClick = (selectedTab: string) => {
    setActiveTab(selectedTab);
    if (selectedTab === Supply.DELIVERY || selectedTab === Supply.PICKUP) {
      dispatch(
        setOrderFormData({ ...orderFormData, supplyMethod: selectedTab }),
      );
    }
  };

  return (
    <div className='drop-shadow-custom relative z-10'>
      <ul className='gap-x-2 flex flex-row flex-wrap' role='tablist'>
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

      <div className='break-words bg-white w-full rounded-2xl rounded-tl-none px-[60px] py-[50px] sm:px-4 sm:py-8'>
        {activeTab === labelFirst && contentFirst}
        {activeTab === labelSecond && contentSecond}
      </div>
    </div>
  );
};

export default Tabs;
