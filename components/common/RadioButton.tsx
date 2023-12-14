import React from 'react';

type RadioButtonProps = {
  id: string;
  onChange: any;
  checked: boolean;
  value: string;
  name: string;
  className?: string;
  crossed?: string;
  isDisabled?: boolean;
  innerHTML?: any;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  onChange,
  checked,
  value,
  isDisabled,
  className,
  innerHTML,
}) => {
  const bg = checked
    ? 'bg-yellow no-underline hover:bg-yellowLight'
    : 'bg-grayLight no-underline hover:bg-gray';

  return (
    <label
      htmlFor={id}
      className={`${bg} ${className} cursor-pointer rounded-2xl ${
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

export default RadioButton;
