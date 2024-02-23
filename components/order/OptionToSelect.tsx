import React from 'react';

type OptionToSelectProps = {
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value?: string;
  name?: string;
  className?: string;
  crossed?: string;
  isDisabled?: boolean;
  innerHTML: React.ReactNode;
};

const OptionToSelect: React.FC<OptionToSelectProps> = ({
  id,
  name,
  onChange,
  checked,
  value,
  isDisabled,
  className,
  innerHTML,
}) => {
  return (
    <label
      htmlFor={id}
      className={`${checked ? 'btn_yellow' : 'btn_grayLight'} ${className} ${
        isDisabled && 'pointer-events-none text-grayDark'
      }`}
    >
      <input
        className='hidden'
        type='radio'
        disabled={isDisabled}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {innerHTML}
    </label>
  );
};

export default OptionToSelect;
