import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-20 h-20 border-solid border-blue-500 rounded-lm border-4 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loader;
