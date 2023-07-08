import React from "react";

type Props = {
  name: string;
};

const Button: React.FC<Props> = ({ name }) => {
  return (
    <button className="bg-secondary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-2xl text-xs flex items-center justify-center uppercase h-[50px] w-full hover:bg-secondaryLight">
      {name}
    </button>
  );
};

export default Button;
