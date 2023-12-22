import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
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

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(toggleTooltip());
      }
    },
    [dispatch],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleClickOutside]);

  const TooltipContent = (
    <>
      <div
        className='absolute left-0 top-0 z-20 cursor-pointer text-grayDark hover:text-primary'
        onClick={handleClickExclamation}
      >
        <AiOutlineExclamationCircle size={18} />
      </div>
      <div className='container absolute -left-2 -top-2 z-10 max-w-[296px] px-9 py-6'>
        <div
          className='absolute right-0 top-0 cursor-pointer p-2 text-grayDark hover:text-primary'
          onClick={handleClickExclamation}
        >
          <RiCloseFill size={24} />
        </div>
        <p className='text-[12px] leading-[15px] font-normal font-montserrat lowercase'>
          {text}
        </p>
      </div>
    </>
  );

  return isTooltipOpen ? (
    <div ref={modalRef}>{TooltipContent}</div>
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