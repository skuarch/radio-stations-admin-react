import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50">
      <div className="h-screen flex justify-center items-center">
        <div
          className="spinner-border animate-pulse inline-block w-8 h-8 border-4 rounded-full bg-white spinner"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
};
export default Loader;
