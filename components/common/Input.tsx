import React from 'react';

type InputProps = {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  isValid?: boolean;
  value?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  onChange,
  value,
  isValid,
}) => {
  return (
    <div className='relative'>
      <input
        onChange={onChange}
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder=''
        className={`px-6 md:py-4 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-gray border-solid focus:outline-none focus:ring-0 focus:border-yellow disabled:border-grayDark h-[60px] !appearance-none hover:appearance-none ${
          !isValid && 'ring-2 ring-secondary'
        }`}
      />
      <label
        htmlFor={id}
        className='absolute bg-white text-sm sm:text-xs text-grayDark font-semibold leading-3 duration-300 transform -translate-y-4 top-2 left-3.5 md:left-2.5 z-0 px-2.5 md:px-3.5'
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
