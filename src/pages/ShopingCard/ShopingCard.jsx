import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/UserContext";
import { ProductCount } from "../../components/ProductCount";

export const ShopingCard = () => {
  const { user, loading } = useContext(AuthContext);
  const [cardProduct, setCardProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
            <ProductCount
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            />
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
              <h1>{totalPrice}</h1>
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
