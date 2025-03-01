import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ShopingCard = () => {
  return (
    <div className="w-full my-10 px-5">
      <h1 className="text-3xl font-bold mb-10">Shopping card</h1>

      {/* shoppint card  */}
      <div className="md:flex justify-between gap-5">
        <div className="md:w-[65%] border-t md:p-10">
          <div className="md:flex justify-around gap-5 mb-5 shadow-sm p-1">
            <img
              className="w-[150px] h-[150px] rounded-lg"
              src="https://s.alicdn.com/@sc04/kf/Hbd58ba70ce5c4c5eb2cb559263abcf6dQ.jpg_480x480.jpg"
              alt=""
            />
            <div>
              <h1>
                Christmas Glow Toys LED Flashing Party Favor Kids Glow in the
                Night Toys Halloween Graduation Party Decorations
              </h1>
              <p className="font-bold text-xl">$520.00</p>
              {/* <p>Min. order : 1 pieces</p>
            <p>Easy return</p> */}
              <div className="mt-1 flex items-center gap-2">
                <button className="px-2 border border-black rounded-full">
                  -
                </button>
                <button className="px-2 border border-black rounded-full">
                  1
                </button>
                <button className="px-2 border border-black rounded-full">
                  +
                </button>
              </div>
            </div>
            <div>
              <button className="text-2xl hidden md:block">
                <RiDeleteBin6Line />
              </button>
            </div>
            <div className="flex items-center md:items-start gap-10">
              <button className="text-2xl md:hidden">
                <RiDeleteBin6Line />
              </button>
              <p className="font-bold text-xl">$520.00</p>
            </div>
          </div>
        </div>

        {/* order summary  */}
        <div className="md:w-[30%] mt-10 md:mt-0 shadow-lg p-5">
          <h1 className="font-bold text-xl mb-5">
            Order summary (3 variations)
          </h1>
          <div className="flex items-center justify-between">
            <div>
              <h1>Item subtotal</h1>
              <h1>Shipping fee</h1>
            </div>
            <div>
              <h1>$108.72 </h1>
              <h1>$1,230.98 </h1>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex items-center justify-between font-bold">
            <h1>Subtotal excl. tax</h1>
            <h1>$1,339.70</h1>
          </div>
          <div>
            <button className="py-3 mt-5 rounded-full w-full border text-white bg-orange-500">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
