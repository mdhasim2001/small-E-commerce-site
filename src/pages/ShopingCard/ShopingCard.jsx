import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export const ShopingCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  const handleQuantityPlus = () => {
    const count = quantity + 1;
    setQuantity(count);
  };
  const handleQuantityMinus = () => {
    if (quantity === 1) {
      return quantity;
    }
    const count = quantity - 1;
    setQuantity(count);
  };

  return (
    <div className="w-full px-5">
      <h1 className="p-2 font-bold">Shopping card</h1>

      {/* shoppint card  */}
      <div className=" flex justify-around gap-5">
        <div className="w-[65%]">
          <div className="md:flex justify-around bg-white gap-5 mb-5 shadow-sm p-5">
            <img
              className="w-16 h-16 rounded-lg hidden md:block"
              src="https://s.alicdn.com/@sc04/kf/Hbd58ba70ce5c4c5eb2cb559263abcf6dQ.jpg_480x480.jpg"
              alt=""
            />
            {/* for mobail */}
            <div className="">
              <div>
                <h1>Christmas Glow Toys LED Flashing</h1>
                <p className="font-bold text-xl">$520.00</p>
                {/* <p>Min. order : 1 pieces</p>
            <p>Easy return</p> */}
              </div>
            </div>
            <div className="">
              <p className="font-bold text-xl">$520.00</p>
              <div className="mt-1 flex items-center gap-2">
                <button onClick={handleQuantityMinus} className="text-2xl">
                  <CiCircleMinus />
                </button>
                <p>{quantity}</p>
                <button onClick={handleQuantityPlus} className="text-2xl">
                  <CiCirclePlus />
                </button>
              </div>
            </div>
            <div>
              <button className="text-2xl hidden md:block">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>

        {/* order summary  */}
        <div className="md:w-[30%] bg-white mt-10 md:mt-0 shadow-lg p-5">
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
