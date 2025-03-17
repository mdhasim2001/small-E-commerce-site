import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ProductCount = ({
  product,
  handleDelete,
  setSubTotal,
  subTotal,
}) => {
  const [totalPrice, setTotalPrice] = useState(product.totalPrice);
  const [productCount, setProductCount] = useState(product.quantity);
  const [check, setCheck] = useState(false);

  const handleProductPlus = () => {
    if (productCount === product.stock) {
      return alert("Sorry stock not aviailable");
    }
    setProductCount(productCount + 1);
    setTotalPrice(totalPrice + product.price);
  };
  const handleProductMinus = () => {
    if (productCount === 1) {
      return alert("Please minimum one product order");
    }
    setProductCount(productCount - 1);
    setTotalPrice(totalPrice - product.price);
  };

  const handleProductCheck = (e) => {
    if (e.target.checked) {
      setSubTotal(subTotal + totalPrice);
      setCheck(true);
    } else {
      setSubTotal(subTotal - totalPrice);
      setCheck(false);
    }
  };

  return (
    <div
      key={product._id}
      className=" grid grid-cols-6 md:grid-cols-6 bg-white gap-5 mb-5 shadow-sm p-3"
    >
      <input onChange={handleProductCheck} type="checkbox" className="w-5" />
      <img
        className="w-16 h-16 col-span-2 md:col-span-1 mx-auto rounded-lg"
        src={product.thumbnail}
        alt=""
      />
      {/* for mobail */}
      <div className="col-span-4 md:col-span-2">
        <div className="flex justify-between gap-2">
          <h1>{product.title}</h1>
          <button className="md:hidden text-2xl">
            <RiDeleteBin6Line />
          </button>
        </div>
        <p className="font-bold text-xl">${product.price}</p>
        {/* <p>Min. order : 1 pieces</p>
      <p>Easy return</p> */}
      </div>
      <div className="hidden md:block">
        <p className="font-bold text-xl">${totalPrice}</p>
        <div className="mt-1 flex items-center gap-2">
          <button
            onClick={handleProductMinus}
            className={`text-2xl ${check ? "hidden" : "block"}`}
          >
            <CiCircleMinus />
          </button>
          {check ? <p>Quantity = {productCount}</p> : <p>{productCount}</p>}
          <button
            onClick={handleProductPlus}
            className={`text-2xl ${check ? "hidden" : "block"}`}
          >
            <CiCirclePlus />
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDelete(product.productId)}
          className="hidden md:block text-2xl"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};
