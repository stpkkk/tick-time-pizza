import React, { ReactNode } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { toggleTooltip } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type NoticeProps = {
  children: ReactNode;
};

const Notice: React.FC<NoticeProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isTooltipOpen } = useAppSelector((state) => state.menuReducer);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClickExclamation = () => {
    dispatch(toggleTooltip());
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleNoticeClick = () => {
    dispatch(toggleTooltip());
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(toggleTooltip());
      }
    };

    if (isTooltipOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTooltipOpen, dispatch]);

  const TooltipContent = (
    <div
      className='relative max-w-[296px] w-full'
      ref={modalRef}
      onClick={handleModalClick}
    >
      <div className='text-grayDark hover:text-primary animate-fade-in absolute top-0 left-0 z-20 cursor-pointer'>
        <AiOutlineExclamationCircle size={18} />
      </div>
      <div className='wrapper w-[296px] -left-2 -top-2 px-9 absolute z-10 py-6'>
        <div
          className='text-grayDark hover:text-primary animate-fade-in absolute top-0 right-0 p-2 cursor-pointer'
          onClick={handleClickExclamation}
        >
          <RiCloseFill size={24} />
        </div>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );

  return isTooltipOpen ? (
    <div onClick={handleNoticeClick}>{TooltipContent}</div>
  ) : (
    <div
      className='text-grayDark hover:text-primary animate-fade-in cursor-pointer max-w-[20px]'
      onClick={handleClickExclamation}
    >
      <AiOutlineExclamationCircle size={18} />
    </div>
  );
};

export default Notice;
