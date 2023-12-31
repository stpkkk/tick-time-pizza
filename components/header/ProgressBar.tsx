import React from 'react';
import { useReadingProgress } from '@/hooks';

const ProgressBar: React.FC = () => {
  const completion = useReadingProgress();

  return (
    <div
      style={{
        transform: `width(${completion - 100}%)`,
        width: `${completion}%`,
      }}
      className='absolute left-0 top-0 h-1.5 bg-yellow'
    />
  );
};

export default ProgressBar;
