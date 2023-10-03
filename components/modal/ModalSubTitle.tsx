import React from 'react';

type ModalSubTitleProps = {
  text: string;
};

const ModalSubTitle: React.FC<ModalSubTitleProps> = ({ text }) => {
  return (
    <div className='mb-5 text-base font-bold leading-5 md:mb-4 md:text-sm md:leading-[15px]'>
      <span>{text}</span>
    </div>
  );
};

export default ModalSubTitle;
