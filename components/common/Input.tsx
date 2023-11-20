import React from 'react';

type InputProps = {
  id: string;
  label: string;
  onChange: () => void;
  isButton?: boolean;
  type: string;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  onChange,
  isButton,
}) => {
  return (
    <div className='relative'>
      <input
        // onChange={onInputChange}
        id={id}
        name={id}
        type={type}
        className='px-6 md:py-4 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-gray border-solid focus:outline-none focus:ring-0 focus:border-yellow disabled:border-grayDark h-[60px] !appearance-none hover:appearance-none pr-20'
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
