import React from 'react';

export const PinkButton = ({ label }) => {
  return (
    <>
      {
        label &&
        <button className="text-white bg-pink-600 hover:bg-pink-700 font-bold rounded-lg text-sm px-5 py-2.5 transition ease-in-out delay-70 focus:outline-none dark:focus:ring-blue-800">
          {label}
        </button>
      }
    </>
  );
};
