import React from "react";

const CloseBtn = ({toggleModel}) => {
  return (
    <>
      <button
        className="h-8 w-8 text-gray-200 bg-gray-100 border-transparent border-[1px] rounded-full inline-flex justify-center items-center dark:bg-neutral-700 dark:text-neutral-400
  dark:hover:bg-neutral-600"
        onClick={toggleModel}
        aria-label="Close"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </>
  );
};

export default CloseBtn;
