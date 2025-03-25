import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/UserContext";
import { ProductCount } from "../../components/ProductCount";
import { Link } from "react-router-dom";

export const ShopingCard = () => {
  const { user, loading } = useContext(AuthContext);
  const [cardProduct, setCardProduct] = useState([]);
  const [orderProduct, serOrderProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    axios(`http://localhost:5000/card-product?email=${user?.email}`).then(
      (res) => {
        console.log(res.data);
        setCardProduct(res.data);
      }
    );
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/product/${id}`)
      .then((res) => {
        setCardProduct(cardProduct.filter((product) => product._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOrderProduct = () => {
    orderProduct.map((product) => {
      axios
        .put("http://localhost:5000/orderProducts", {
          user: product.user,
          quantity,
          subTotal,
          order: product.product,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  return (
    <div className="w-full md:px-5">
      <div className="flex items-center justify-between p-2">
        <h1 className="font-bold">Shopping card</h1>
        <Link to="/checkOut" className="cursor-pointer font-bold">
          Pending order
        </Link>
      </div>

      {/* shoppint card  */}
      <div className=" md:flex justify-around gap-5">
        <div className="md:w-[65%]">
          {cardProduct.map((product) => (
            <ProductCount
              key={product._id}
              product={product}
              handleDelete={handleDelete}
              orderProduct={orderProduct}
              setOrderProduct={serOrderProduct}
              quantity={quantity}
              setQuantity={setQuantity}
              setSubTotal={setSubTotal}
              subTotal={subTotal}
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
              <h1>${subTotal.toFixed(2)}</h1>
              <h1>${((subTotal / 100) * 2).toFixed(2)}</h1>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex items-center justify-between font-bold">
            <h1>Subtotal excl. tax</h1>
            <h1>${((subTotal / 100) * 2 + subTotal).toFixed(2)}</h1>
          </div>
          <div>
            <Link to="/checkOut">
              {subTotal === 0 ? (
                <button
                  disabled
                  className="py-3 mt-5 rounded-full w-full border text-white bg-orange-400"
                >
                  Check out
                </button>
              ) : (
                <button
                  onClick={handleOrderProduct}
                  className="py-3 mt-5 rounded-full w-full border text-white bg-orange-500"
                >
                  Check out
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
