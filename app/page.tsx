import React from "react";

import { Categories, Menu } from "@/components";

const Home: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="h-[390px] bg-grayLight w-full  mt-[120px] rounded-2xl">
        Slider🤡
      </div>
      <Categories />
      <Menu />
    </div>
  );
};

export default Home;
