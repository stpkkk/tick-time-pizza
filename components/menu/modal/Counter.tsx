import React from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

interface CounterProps {
	id?: number  
	initialValue: number
	handleDecrement: (id?: number) => void
	handleIncrement: (id?: number) => void
	value: number
}

const Counter: React.FC<CounterProps> = ({ initialValue, handleDecrement, handleIncrement, value, id }) => {

	const counterValue = value || initialValue

  return (
    <>
      <button
        className={`${
					counterValue <= initialValue ? "text-gray" : "text-grayDark hover:text-primary"
        } p-2`}
        type="button"
				onClick={() => handleDecrement(id)}
      >
        <AiOutlineMinusCircle size={18} />
      </button>
			<span className="whitespace-nowrap">{counterValue} шт.</span>
      <button
        className="text-grayDark hover:text-primary p-2"
        type="button"
				onClick={() => handleIncrement(id)}
      >
        <AiOutlinePlusCircle size={18} />
      </button>
    </>
  );
};

export default Counter