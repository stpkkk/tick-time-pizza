import React from 'react';
import Image from 'next/image';
import { IOption } from '@/types';

export interface IInputCheckboxProps {
  option: IOption;
  className: string;
  isChecked: boolean;
  crossed?: string;
  isDisabled?: boolean;
  handleChange: (option: IOption) => void;
}

const InputCheckbox: React.FC<IInputCheckboxProps> = ({
  option,
  className,
  isChecked,
  crossed,
  isDisabled,
  handleChange,
}) => {
  const bgStyles = isChecked
    ? 'bg-yellow hover:bg-yellowLight'
    : 'bg-grayLight hover:bg-gray';

  return (
    option.value && (
      <label
        key={option.id}
        className={`${bgStyles} ${className} flex items-center justify-between gap-2 cursor-pointer rounded-2xl text-sm font-bold sm:text-[12px] no-underline ${
          isDisabled && 'pointer-events-none text-grayDark'
        }`}
      >
        {option.image && (
          <div className='w-5 h-5'>
            <Image
              src={option.image}
              alt={option.value.toString()}
              width={20}
              height={20}
              loading='eager'
              className='sm:h-4 sm:w-4'
            />
          </div>
        )}
        <input
          type='checkbox'
          name={option.value.toString()}
          value={option.value}
          className='hidden'
          onChange={() => handleChange(option)}
          disabled={isDisabled}
        />
        <span className={crossed}>{option.value}</span>
      </label>
    )
  );
};

export default InputCheckbox;
