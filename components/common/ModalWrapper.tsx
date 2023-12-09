import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

const ModalWrapper: React.FC<ModalProps> = ({ children, closeModal }) => {
  return (
    <div className='relative z-10' onClick={closeModal}>
      <div className='overlay' />
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full sm:items-stretch sm:p-0'>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
