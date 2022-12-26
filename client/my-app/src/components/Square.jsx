import React from "react";

const Square = ({ chooseSquare, val }) => {
  return (
    <div
      className=" hover:bg-blue-500 bg-blue-300 h-[120px]  w-[120px] flex items-center justify-center text-5xl "
      onClick={chooseSquare}
    >
      {val}
    </div>
  );
};

export default Square;
