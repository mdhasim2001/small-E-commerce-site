import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const TopRanking = () => {
  return (
    <div className="hidden mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Top ranking</h1>
        <Link className="text-xl font-bold underline flex items-center gap-3">
          View more <FaArrowRightLong />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-5 mt-10">
        <div className=" shadow p-2 rounded-lg cursor-pointer">
          <img
            className="rounded-lg mb-3 w-full h-[15vh]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXE55THweUtTDWHUza8xNbnbIYMMCjfMn2g&s"
            alt=""
          />
          <div className="">
            <p className="font-bold text-xl">$520.00</p>
          </div>
        </div>
        <div className=" shadow p-2 rounded-lg cursor-pointer">
          <img
            className="rounded-lg mb-3 w-full h-[15vh]"
            src="https://s.alicdn.com/@sc04/kf/Hbd58ba70ce5c4c5eb2cb559263abcf6dQ.jpg_480x480.jpg"
            alt=""
          />
          <div className="">
            <p className="font-bold text-xl">$720.00</p>
          </div>
        </div>
        <div className=" shadow p-2 rounded-lg cursor-pointer">
          <img
            className="rounded-lg mb-3 w-full h-[15vh]"
            src="https://s.alicdn.com/@sc04/kf/H1d551265e91844b1b5c3c1f94905c709G.jpg_480x480.jpg"
            alt=""
          />
          <div className="">
            <p className="font-bold text-xl">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
