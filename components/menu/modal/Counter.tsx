import React from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

type CounterProps = {
	value: number
	initialValue: number
	maxValue?: number
	handleDecrement: () => void
	handleIncrement: () => void
}

const Counter: React.FC<CounterProps> = ({ initialValue, handleDecrement, handleIncrement, value, maxValue }) => {

	const counterValue = value || initialValue

  return (
    <>
      <button
        className={`${
          counterValue <= initialValue
            ? "text-grayDark opacity-30"
            : "hover:text-primary"
        } text-grayDark`}
        type="button"
        onClick={() => handleDecrement()}
      >
        <AiOutlineMinusCircle size={18} />
      </button>
      <span className="whitespace-nowrap sm:text-[12px]">
        {counterValue} шт.
      </span>
      <button
        className={`${
          counterValue >= (maxValue || 99)
            ? "text-grayDark opacity-30"
            : "text-grayDark hover:text-primary"
        } text-grayDark`}
        type="button"
        onClick={() => handleIncrement()}
      >
        <AiOutlinePlusCircle size={18} />
      </button>
    </>
  );
};

export default Counter