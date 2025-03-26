import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const GetProdutInspiration = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/products").then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <div className=" py-20 mt-20 px-5">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Get produt inspiration</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {products.map((product) => (
          <Link
            to={`product/details/${product._id}`}
            key={product._id}
            className=" bg-white p-2 cursor-pointer"
          >
            <img
              className="rounded-lg mb-3 w-full md:h-[30vh]"
              src={product.thumbnail}
              alt=""
            />
            <h1 className="mb-3">
              R15 this bike most popular expenciv you can buy this
            </h1>
            <div className="">
              <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
              <p>Min. order : 1 pieces</p>
              <p>Easy return</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-20">
        <button className="bg-white px-20 py-5 shadow rounded-full text-xl font-bold">
          View more
        </button>
      </div>
    </div>
  );
};
