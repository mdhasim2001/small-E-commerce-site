import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

export const ProductDetails = () => {
  const product = useParams();
  const [ProductDetails, setProductDetails] = useState([]);
  const { thumbnail, title, price, rating, brand, description } =
    ProductDetails;

  useEffect(() => {
    axios(`http://localhost:5000/product/${product.id}`).then((res) =>
      setProductDetails(res.data)
    );
  }, []);

  return (
    <div
      key={product._id}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-5 mx-10 my-10"
    >
      <div>
        <img className="rounded-lg mb-3 w-3/4 mx-auto" src={thumbnail} alt="" />
      </div>
      <div className="">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className="mb-3">{description}</p>
        {/* <p>{rating}</p> */}
        <p className="font-bold">{brand}</p>
        <ReactStarsRating className="flex items-center my-5" value={rating} />
        <p className="font-bold text-xl">${price}.00</p>
        <p>Min. order : 1 pieces</p>
        <p>Easy return</p>
        <button className="bg-orange-500 py-2 px-5 text-[12px] font-bold mt-5 rounded-full text-white">
          Add to card
        </button>
      </div>
    </div>
  );
};
