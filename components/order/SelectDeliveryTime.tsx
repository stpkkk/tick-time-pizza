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
        isOpen &&
        'border-grayDark border-b-none rounded-b-none focus:border-grayDark'
      }`}
      type='button'
      onClick={handleClickToggle}
    >
      <span>{time}</span>
      {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
    </button>
    {isOpen && (
      <ul className='absolute w-full border border-grayDark border-solid bg-white rounded-b-2xl border-t-0'>
        {timeArray.map((time) => (
          <li
            className='hover:bg-gray transition w-full text-center py-1 last:rounded-b-2xl'
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
        type !== 'hours'
          ? setMinutesOpen((prev) => !prev)
          : setHoursOpen((prev) => !prev)
      }
      handleClickTime={(time) => handleTimeClick(type, time)}
      time={orderFormData.deliveryTime?.[type]}
    />
  );

  const hours = Array.from({ length: 24 }, (_, index) =>
    String(index < 10 ? `0${index}` : index).padStart(2, '0'),
  );
  const minutes = ['00', '15', '30', '45'];

  const currentHour = new Date().getHours().toString().padStart(2, '0');
  const currentDay = new Date().getDate().toString().padStart(2, '0');
  const currentMinute = new Date().getMinutes().toString().padStart(2, '0');

  const hoursToShow = hours.filter((hour) => hour >= currentHour + 1);

  // const hoursToShow = hours.filter(
  //   (hour) => hour >= currentHour || hour === '00',
  // );
  // const minutesToShow = minutes.filter((minute) => minute >= currentMinute);

  return isNotSoon ? (
    <section>
      <h3 className='h3 mb-4'>Во сколько?</h3>
      <div className='flex items-center gap-3'>
        {renderTimePicker('hours', hoursToShow, hoursOpen)}
        <span className='font-semibold'>:</span>
        {renderTimePicker('minutes', minutes, minutesOpen)}
      </div>
    </section>
  ) : null;
};

export default SelectDeliveryTime;
