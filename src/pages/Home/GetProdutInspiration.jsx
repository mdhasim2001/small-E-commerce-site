import React from "react";

export const GetProdutInspiration = () => {
  return (
    <div className="bg-gray-50 py-20 mt-20 px-5">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Get produt inspiration</h1>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <div className=" shadow p-2 rounded-lg cursor-pointer">
          <img
            className="rounded-lg mb-3 w-full h-[30vh]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXE55THweUtTDWHUza8xNbnbIYMMCjfMn2g&s"
            alt=""
          />
          <h1 className="mb-3">
            R15 this bike most popular expenciv you can buy this
          </h1>
          <div className="">
            <p className="font-bold text-xl">$520.00</p>
            <p>Min. order : 1 pieces</p>
            <p>Easy return</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="bg-white px-20 py-5 shadow rounded-full text-xl font-bold">
          View more
        </button>
      </div>
    </div>
  );
};
