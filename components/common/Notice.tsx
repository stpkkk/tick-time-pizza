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
      <div className='absolute left-0 top-0 z-20 cursor-pointer text-grayDark hover:text-primary'>
        <AiOutlineExclamationCircle size={18} />
      </div>
      <div className='container absolute -left-2 -top-2 z-10 max-w-[296px] px-9 py-6'>
        <div
          className='absolute right-0 top-0 cursor-pointer p-2 text-grayDark hover:text-primary'
          onClick={handleClickExclamation}
        >
          <RiCloseFill size={24} />
        </div>
        <div className='' onClick={(e) => e.stopPropagation()}>
          <p className='text-[12px] leading-[15px] font-normal font-montserrat lowercase'>
            {text}{' '}
            <Link className='underline underline-offset-2' href='/sberbank'>
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
      className='absolute left-0 top-0 z-20 cursor-pointer text-grayDark hover:text-primary'
      onClick={handleClickExclamation}
    >
      <AiOutlineExclamationCircle size={18} />
    </div>
  );
};

export default Notice;