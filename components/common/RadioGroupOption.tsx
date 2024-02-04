'use client';

import React from 'react';
import Image from 'next/image';
import { IOption } from '@/types';
import { RadioGroup } from '@headlessui/react';

export interface IRadioGroupOptionProps {
  option: IOption;
  className: string;
  isChecked?: boolean;
  crossed?: string;
  isDisabled?: boolean;
}

const RadioGroupOption: React.FC<IRadioGroupOptionProps> = ({
  option,
  className,
  isChecked,
  crossed,
  isDisabled,
}) => {
  const backgroundClass = isChecked
    ? 'bg-yellow no-underline hover:bg-yellowLight'
    : 'bg-grayLight no-underline hover:bg-gray';

  return (
    option.value && (
      <RadioGroup.Option
        disabled={isDisabled}
        value={option}
        className={`${backgroundClass} ${className} cursor-pointer rounded-2xl text-sm font-bold sm:text-[12px] ${
          isDisabled && 'pointer-events-none text-grayDark'
        }`}
      >
        <div className='flex items-center justify-between gap-2'>
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
          <div>
            <span className={crossed}>{option.value}</span>
          </div>
        </div>
      </RadioGroup.Option>
    )
  );
};

export default RadioGroupOption;
