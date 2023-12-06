import React from 'react';

type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <li className='w-[256px] h-[60px] sm:w-[106px] sm:h-[40px] cursor-pointer '>
      <a
        className={`flex_center text-xl font-bold block leading-5 bg-white rounded-t-2xl h-full sm:text-[0.645rem] sm:leading-[0.75rem] ${
          isActive ? 'bg-white' : '!bg-gray text-grayDark hover:text-primary'
        }`}
        onClick={onClick}
        role='tablist'
      >
        {label}
      </a>
    </li>
  );
};

export default Tab;
