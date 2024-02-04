'use client';

import React from 'react';

const ButtonBackToTop: React.FC = () => {
  const [buttonBackToTop, setButtonBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setButtonBackToTop(true);
      } else {
        setButtonBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className='fixed bottom-[50px] left-[50px] z-20 cursor-pointer'
      onClick={scrollUp}
    >
      {buttonBackToTop ? (
        <div>
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            className='to-top-button fixed bottom-8 right-8 z-10 h-[50px] w-[50px] rotate-90 cursor-pointer fill-current opacity-30 hover:opacity-20 active:opacity-50 sm:h-[30px] sm:w-[30px]'
          >
            <path d='M15.012 30C6.74 30.012.002 23.282 0 15.003-.002 6.727 6.732-.005 15.007 0 23.27.005 29.984 6.714 30 14.978c.016 8.274-6.706 15.01-14.988 15.022ZM13.97 14.953c.155-.115.283-.187.383-.287 1.145-1.138 2.284-2.281 3.425-3.42.486-.486.65-1.065.452-1.717-.372-1.224-1.858-1.572-2.795-.647a719.576 719.576 0 0 0-4.888 4.885c-.75.755-.737 1.725.022 2.49 1.073 1.08 2.152 2.154 3.23 3.23.58.58 1.15 1.168 1.742 1.734.472.452 1.044.577 1.662.377.621-.201.999-.648 1.12-1.287.118-.612-.105-1.12-.539-1.551-1.244-1.239-2.486-2.48-3.814-3.808v.001Z' />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default ButtonBackToTop;
