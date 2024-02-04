import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type TimePickerProps = {
  timeArray: string[];
  isOpen: boolean;
  handleClickToggle: () => void;
  handleClickTime: (time: string) => void;
  time?: string;
  isDisabled?: boolean;
};

const TimePicker: React.FC<TimePickerProps> = ({
  timeArray,
  isOpen,
  handleClickToggle,
  handleClickTime,
  time,
  isDisabled,
}) => (
  <div className='relative bg-white max-w-[96px] w-full'>
    <button
      className={`flex_between px-6 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-grayDark border-solid focus:outline-none focus:ring-0 focus:border-yellow ring-none min-h-[60px] sm:min-h-[50px] ${
        isDisabled && 'pointer-events-none border-opacity-50'
      } ${isOpen && 'border-yellow border-b-none rounded-b-none'}`}
      type='button'
      onClick={handleClickToggle}
    >
      <span>{time}</span>
      {isOpen ? (
        <IoIosArrowUp size={20} />
      ) : (
        <IoIosArrowDown size={20} className={`${isDisabled && 'opacity-50'}`} />
      )}
    </button>
    {isOpen && (
      <ul className='absolute w-full max-h-[130px] overflow-y-auto thin_scroll border border-yellow border-solid bg-white rounded-b-2xl border-t-0'>
        {timeArray.map((time) => (
          <li
            className='w-full py-1 text-center transition hover:bg-gray last:rounded-b-2xl'
            key={time}
            onClick={() => handleClickTime(time)}
          >
            {time}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TimePicker;
