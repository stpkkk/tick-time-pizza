'use client';

import React from 'react';
import Tab from './Tab';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
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
    if (selectedTab === Supply.DELIVERY || Supply.PICKUP) {
      dispatch(
        setOrderFormData({ ...orderFormData, supplyMethod: selectedTab }),
      );
    }
  };

  return (
    <div className='drop-shadow-custom relative z-10'>
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

      <div className='break-words bg-white w-full rounded-2xl rounded-tl-none px-[60px] py-[50px] sm:px-4 sm:py-8'>
        {activeTab === labelFirst && contentFirst}
        {activeTab === labelSecond && contentSecond}
      </div>
    </div>
  );
};

export default Tabs;
