import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';
import { toggleTooltip } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type NoticeProps = {
  text: string;
};

const Notice: React.FC<NoticeProps> = ({ text }) => {
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
    <div ref={modalRef} onClick={handleModalClick}>
      <div className='text-grayDark hover:text-primary absolute top-0 left-0 z-20 animate-fade-in cursor-pointer'>
        <AiOutlineExclamationCircle size={18} />
      </div>
      <div className='container absolute -left-2 -top-2 z-10 max-w-[296px] px-9 py-6'>
        <div
          className='text-grayDark hover:text-primary absolute top-0 right-0 p-2 animate-fade-in cursor-pointer'
          onClick={handleClickExclamation}
        >
          <RiCloseFill size={24} />
        </div>
        <div className='' onClick={(e) => e.stopPropagation()}>
          <p className='text-[12px] leading-[15px] font-normal font-montserrat lowercase'>
            {text}{' '}
            <Link className='underline-offset-2 underline' href='/sberbank'>
              здесь
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

  return isTooltipOpen ? (
    <div onClick={handleNoticeClick}>{TooltipContent}</div>
  ) : (
    <div
      className='text-grayDark hover:text-primary animate-fade-in cursor-pointer'
      onClick={handleClickExclamation}
    >
      <AiOutlineExclamationCircle size={18} />
    </div>
  );
};

export default Notice;
