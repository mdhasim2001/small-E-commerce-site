import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const product = useParams();
  const [ProductDetails, setProductDetails] = useState([]);
  const { thumbnail, title, price, rating, description } = ProductDetails;
  console.log(ProductDetails);

  useEffect(() => {
    axios(`http://localhost:5000/product/${product.id}`).then((res) =>
      setProductDetails(res.data)
    );
  }, []);

  return (
    <div
      key={product._id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 lg:w-3/4 lg:mx-auto my-10"
    >
      <div>
        <img className="rounded-lg mb-3 w-full" src={thumbnail} alt="" />
      </div>
      <div className="">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className="mb-3">{description}</p>
        <p className="font-bold text-xl">$520.00</p>
        <p>Min. order : 1 pieces</p>
        <p>Easy return</p>
        <button className="bg-orange-400 py-1 px-3 text-[12px] font-bold mt-5 rounded-full text-white">
          Add to card
        </button>
      </div>
    </div>
  );
};
