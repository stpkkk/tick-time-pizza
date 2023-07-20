import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/features/menuSlice";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Counter: React.FC = () => {
  const value = useAppSelector(state => state.menuReducer.value);

  const dispatch = useAppDispatch();

  return (
    <div className="flex_between w-24 sm:w-32 ">
      <button
        className={`${
          value <= 1 ? "text-gray" : "text-grayDark hover:text-primary"
        } p-2`}
        type="button"
        onClick={() => dispatch(decrement())}
      >
        <AiOutlineMinusCircle size={18} />
      </button>
      <span className="block">{value}</span>
      <button
        className="text-grayDark hover:text-primary p-2"
        type="button"
        onClick={() => dispatch(increment())}
      >
        <AiOutlinePlusCircle size={18} />
      </button>
    </div>
  );
};

export default Counter;
