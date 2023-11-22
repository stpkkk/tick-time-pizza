import React from 'react';

type InputProps = {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: string;
  isValid?: boolean;
  onBlur?: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  onChange,
  value,
  onBlur,
  isValid,
}) => {
  return (
    <div className='relative'>
      <label
        htmlFor={id}
        className='absolute bg-white text-sm sm:text-xs text-grayDark font-semibold leading-3 duration-300 transform -translate-y-4 top-2 left-3.5 md:left-2.5 z-0 px-2.5 md:px-3.5'
      >
        {label}
      </label>
      <input
        onChange={onChange}
        id={id}
        name={id}
        type={type}
        value={value}
        onBlur={onBlur}
        placeholder=''
        className={`px-6 md:py-4 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-gray border-solid focus:outline-none focus:ring-0 focus:border-yellow disabled:border-grayDark h-[60px] !appearance-none hover:appearance-none ring-none ${
          id === 'email' &&
          isValid &&
          'border-secondary focus:ring-secondary focus:border-secondary'
        }`}
      />
    </div>
  );
};

export default Input;
