import React from "react";
import { Categories } from "@/components";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Categories />
    </div>
  );
};

export default Home;
