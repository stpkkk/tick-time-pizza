import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { DeliveryDate } from '@/types';

interface TimePickerProps {
  timeArray: string[];
  isOpen: boolean;
  handleClickToggle: () => void;
  handleClickTime: (time: string) => void;
  time?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({
  timeArray,
  isOpen,
  handleClickToggle,
  handleClickTime,
  time,
}) => (
  <div className='relative bg-white max-w-[96px] w-full min-h-[60px]'>
    <button
      className={`flex_between px-6 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-gray border-solid focus:outline-none focus:ring-0 focus:border-yellow ring-none min-h-[60px] ${
        isOpen && 'border-b-none rounded-b-none focus:border-gray'
      }`}
      type='button'
      onClick={handleClickToggle}
    >
      <span>{time}</span>
      {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
    </button>
    {isOpen && (
      <ul className='absolute z-50 w-full border border-gray border-solid bg-white rounded-b-2xl'>
        {timeArray.map((time) => (
          <li
            className='hover:bg-gray w-full text-center py-1'
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

const SelectDeliveryTime: React.FC = () => {
  const [hoursOpen, setHoursOpen] = React.useState(false);
  const [minutesOpen, setMinutesOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { orderFormData } = useAppSelector((state) => state.profileReducer);

  const handleTimeClick = (type: 'hours' | 'minutes', value: string) => {
    const deliveryTime = { ...orderFormData.deliveryTime, [type]: value };
    dispatch(setOrderFormData({ ...orderFormData, deliveryTime }));
    if (type === 'hours') setHoursOpen(false);
    else setMinutesOpen(false);
  };

  const isNotSoon = orderFormData.deliveryDate !== DeliveryDate.SOON;

  const renderTimePicker = (
    type: 'hours' | 'minutes',
    timeArray: string[],
    isOpen: boolean,
  ) => (
    <TimePicker
      timeArray={timeArray}
      isOpen={isOpen}
      handleClickToggle={() =>
        type === 'hours'
          ? setHoursOpen((prev) => !prev)
          : setMinutesOpen((prev) => !prev)
      }
      handleClickTime={(time) => handleTimeClick(type, time)}
      time={orderFormData.deliveryTime?.[type]}
    />
  );

  const hours = Array.from({ length: 24 }, (_, index) =>
    String(index < 10 ? `0${index}` : index).padStart(2, '0'),
  );

  const minutes = ['00', '15', '30', '45'];

  return isNotSoon ? (
    <section>
      <h3 className='h3 mb-4'>Во сколько?</h3>
      <div className='flex items-center gap-3'>
        {renderTimePicker('hours', hours, hoursOpen)}
        <span className='font-semibold'>:</span>
        {renderTimePicker('minutes', minutes, minutesOpen)}
      </div>
    </section>
  ) : null;
};

export default SelectDeliveryTime;
