import React from 'react';
import TimePicker from './TimePicker';
import { setOrderFormData } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { DeliveryDate } from '@/types';
import { getFormattedDateTime } from '@/utils';

const SelectDeliveryTime: React.FC = () => {
  const [hoursOpen, setHoursOpen] = React.useState(false);
  const [minutesOpen, setMinutesOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { orderFormData } = useAppSelector((state) => state.profileReducer);
  const timePickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        timePickerRef.current &&
        !timePickerRef.current.contains(event.target as Node)
      ) {
        setHoursOpen(false);
        setMinutesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTimeClick = (type: 'hours' | 'minutes', value: string) => {
    const deliveryTime = { ...orderFormData.deliveryTime, [type]: value };
    dispatch(setOrderFormData({ ...orderFormData, deliveryTime }));
    setMinutesOpen(false);
    setHoursOpen(false);
  };

  const handleToggleHours = () => {
    setHoursOpen((prev) => !prev);
    setMinutesOpen(false);
  };

  const handleToggleMinutes = () => {
    setMinutesOpen((prev) => !prev);
    setHoursOpen(false);
  };

  const renderTimePicker = (
    type: 'hours' | 'minutes',
    timeArray: string[],
    isOpen: boolean,
    isDisabled?: boolean,
  ) => (
    <TimePicker
      timeArray={timeArray}
      isOpen={isOpen}
      handleClickToggle={() =>
        type === 'hours' ? handleToggleHours() : handleToggleMinutes()
      }
      handleClickTime={(time) => handleTimeClick(type, time)}
      time={orderFormData.deliveryTime?.[type]}
      isDisabled={isDisabled}
    />
  );

  const isNotSoon = orderFormData.deliveryDate !== DeliveryDate.SOON;

  const { currentHour } = getFormattedDateTime();
  const hours = Array.from({ length: 24 }, (_, index) =>
    String(index < 10 ? `0${index}` : index).padStart(2, '0'),
  );
  const hoursToShow = hours.filter((hour) => hour >= currentHour + 2);
  const minutes = ['00', '15', '30', '45'];

  const isMinutesDisabled = !orderFormData.deliveryTime?.hours;

  return isNotSoon ? (
    <section>
      <h3 className='h3 mb-4'>Во сколько?</h3>
      <div className='flex items-center gap-3' ref={timePickerRef}>
        {renderTimePicker('hours', hoursToShow, hoursOpen)}
        <span className='font-semibold'>:</span>
        {renderTimePicker('minutes', minutes, minutesOpen, isMinutesDisabled)}
      </div>
    </section>
  ) : null;
};

export default SelectDeliveryTime;
