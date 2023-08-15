import React from "react";

import { Categories, Menu, Slider } from "@/components";

const Home: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center w-full">
      <Slider />
      <Categories />
      <Menu />
    </div>
  );
};

export default Home;
