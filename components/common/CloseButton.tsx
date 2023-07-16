import React from "react";

const CloseButton: React.FC = () => {
  return (
    <button
      className="flex items-center gap-3 font-semibold text-sm text-primary hover:text-dark disabled:text-dark-light no-outline absolute top-0 right-0 p-3 md:top-[18px] md:right-[18px]"
      type="button"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="fill-current w-[13px] h-[13px] md:w-[19px] md:h-[19px]"
      >
        <path d="M11.636.374a.522.522 0 0 0-.74-.003L6 5.257 1.115.372a.526.526 0 1 0-.743.743L5.257 6 .37 10.895a.522.522 0 0 0 .739.738L6 6.743l4.9 4.891a.519.519 0 0 0 .734-.734L6.744 6l4.89-4.89a.522.522 0 0 0 .002-.736Z"></path>
      </svg>
    </button>
  );
};

export default CloseButton;
