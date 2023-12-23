import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
  width?: number;
};

const ModalWrapper: React.FC<ModalProps> = ({
  children,
  closeModal,
  width,
}) => {
  return (
    <div className='relative z-10' onClick={closeModal}>
      <div className='overlay' />
      <div className='fixed inset-0 overflow-y-auto flex_center min-h-full sm:items-stretch sm:p-0'>
        <div
          className='relative flex w-full scale-100 flex-col justify-center overflow-hidden rounded-2xl bg-white opacity-100 drop-shadow-custom transition-all sm:max-w-full sm:rounded-none'
					style={{
						maxWidth: `${width}px`,
					}}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary sm:right-0 sm:top-0 sm:p-1'
            type='button'
            onClick={closeModal}
          >
            <RiCloseFill size={36} className='md:w-7' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;