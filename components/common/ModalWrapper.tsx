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
    <div className='relative z-30' onClick={closeModal}>
      <div className='overlay' />
      <div className='flex_center sm:items-stretch sm:p-0 fixed inset-0 min-h-full overflow-y-auto'>
        <div
          className='rounded-2xl drop-shadow-custom sm:max-w-full sm:rounded-none relative flex flex-col justify-center w-full overflow-hidden transition-all scale-100 bg-white opacity-100'
          style={{
            maxWidth: `${width}px`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className='absolute right-[18px] top-[18px] z-10 flex items-center gap-3 text-grayDark hover:text-primary animate-fade-in sm:right-0 sm:top-0 sm:p-1'
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
