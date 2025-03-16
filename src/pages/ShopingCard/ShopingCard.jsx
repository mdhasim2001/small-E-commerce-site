import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import axios from "axios";
import { AuthContext } from "../../context/UserContext";

export const ShopingCard = () => {
  const { user, loading } = useContext(AuthContext);
  const [cardProduct, setCardProduct] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    axios(`http://localhost:5000/card-product/?email=${user.email}`).then(
      (res) => {
        setCardProduct(res.data);
      }
    );
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/product/${id}`)
      .then((res) => {
        setCardProduct(
          cardProduct.filter((product) => product.productId !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full md:px-5">
      <h1 className="p-2 font-bold">Shopping card</h1>

      {/* shoppint card  */}
      <div className=" md:flex justify-around gap-5">
        <div className="md:w-[65%]">
          {cardProduct.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-6 md:grid-cols-5 bg-white gap-5 mb-5 shadow-sm p-3"
            >
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
                <p className="font-bold text-xl">${product.totalPrice}</p>
                <div className="mt-1 flex items-center gap-2">
                  <button className="text-2xl">
                    <CiCircleMinus />
                  </button>
                  <p>{product.quantity}</p>
                  <button className="text-2xl">
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
          ))}
        </div>

        {/* order summary  */}
        <div className="md:w-[30%] h-max sticky top-10 bg-white mt-10 md:mt-0 shadow-lg p-5">
          <h1 className="font-bold text-xl mb-5">
            Order summary ({cardProduct.length} variations)
          </h1>
          <div className="flex items-center justify-between">
            <div>
              <h1>Item subtotal</h1>
              <h1>Shipping fee</h1>
            </div>
            <div>
              <h1>500</h1>
              <h1>525</h1>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex items-center justify-between font-bold">
            <h1>Subtotal excl. tax</h1>
            <h1></h1>
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
