import React from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

interface CounterProps {
	initialValue: number
	handleDecrement: () => void
	handleIncrement: () => void
	value: number
}

const Counter: React.FC<CounterProps> = ({ initialValue, handleDecrement, handleIncrement, value }) => {

	const counterValue = value || initialValue

  return (
    <>
      <button
        className={`${
					counterValue <= initialValue ? "text-gray" : "text-grayDark hover:text-primary"
        } p-2`}
        type="button"
				onClick={() => handleDecrement()}
      >
        <AiOutlineMinusCircle size={18} />
      </button>
			<span className="whitespace-nowrap">{counterValue} шт.</span>
      <button
        className="text-grayDark hover:text-primary p-2"
        type="button"
				onClick={() => handleIncrement()}
      >
        <AiOutlinePlusCircle size={18} />
      </button>
    </>
  );
};

export default Counter