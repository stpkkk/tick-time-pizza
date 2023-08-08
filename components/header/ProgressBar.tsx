import { useReadingProgress } from "@/hooks";
import React from "react";

const ProgressBar: React.FC = () => {
  const completion = useReadingProgress();

  return (
    <div
      style={{
        transform: `width(${completion - 100}%)`,
        width: `${completion}%`,
      }}
      className="absolute bg-yellow h-1.5 top-0 left-0"
    />
  );
};

export default ProgressBar;
