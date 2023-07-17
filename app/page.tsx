import React from "react";
import { Categories, Menu } from "@/components";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-322px)] flex-col items-center">
      <Categories />
      <Menu />
    </div>
  );
};

export default Home;
