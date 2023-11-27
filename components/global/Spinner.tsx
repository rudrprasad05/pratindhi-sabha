import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const SpiniJoji = () => {
  return (
    <div className="z-50 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-950/50">
      <div className="flex flex-col items-center justify-center">
        <AiOutlineLoading
          className={"w-24 h-24 stroke-orange-400 fill-orange-400 animate-spin"}
        />
        <div className="py-10 text-orange-400 text-3xl font-bold tracking-wide">
          Loading
        </div>
      </div>
    </div>
  );
};

export default SpiniJoji;
