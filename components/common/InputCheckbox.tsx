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
  return (
    option.value && (
      <label
        key={option.id}
        className={`${
          isChecked ? 'btn_yellow' : 'btn_grayLight'
        } ${className} flex items-center justify-between gap-2 text-sm font-bold sm:text-[12px] ${
          isDisabled && 'pointer-events-none text-grayDark'
        }`}
      >
        <input
          type='checkbox'
          name={option.value.toString()}
          value={option.value}
          className='hidden'
          onChange={() => handleChange(option)}
          disabled={isDisabled}
        />
        {option.image && (
          <div className='w-5 h-5'>
            <Image
              src={option.image}
              alt={option.value.toString()}
              width={20}
              height={20}
              loading='eager'
              className='sm:h-4 sm:w-4 select-none'
            />
          </div>
        )}
        <span className={`${crossed}`}>{option.value}</span>
      </label>
    )
  );
};

export default InputCheckbox;
