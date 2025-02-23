import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const TopRanking = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Top ranking</h1>
        <Link className="text-xl font-bold underline flex items-center gap-3">
          View more <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};
