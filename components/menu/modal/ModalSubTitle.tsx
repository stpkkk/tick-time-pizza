import React from 'react';

type ModalSubTitleProps = {
  text: string;
};

const ModalSubTitle: React.FC<ModalSubTitleProps> = ({ text }) => {
  return (
    <div className='md:text-sm md:leading-[15px] text-base leading-5 font-bold md:mb-4 mb-5'>
      <span>{text}</span>
    </div>
  );
};

export default ModalSubTitle;
