import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";

export const CheckOut = () => {
  const { user, loading } = useContext(AuthContext);
  const [orderProducts, setOrderProducts] = useState([]);
  const [address, setAddress] = useState([]);

  const [division, setDivision] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [districts, setDistricts] = useState([]);

  // console.log(user.email);
  let subTotalPrice = 0;
  for (const price of orderProducts) {
    subTotalPrice += price.order.totalPrice;
  }

  useEffect(() => {
    axios(`http://localhost:5000/orderProducts?email=${user?.email}`)
      .then((res) => {
        setOrderProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDeleteOrderProduct = (id) => {
    axios
      .delete(`http://localhost:5000/orderProducts/${id}`)
      .then((res) => {
        if (res.data) {
          setOrderProducts(orderProducts.filter((p) => p._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios("http://localhost:5000/division")
      .then((res) => {
        setDivision(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDistrict = (e) => {
    const district = division.filter((dis) => dis.name === e.target.value);
    axios(`http://localhost:5000/districts?divisionId=${district[0].id}`)
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpazila = (e) => {
    const upazila = districts.filter((upa) => upa.name === e.target.value);
    axios(`http://localhost:5000/upazilas?districtsId=${upazila[0].id}`)
      .then((res) => {
        setUpazila(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUserAddress = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const region = form.region.value;
    const city = form.city.value;
    const zone = form.zone.value;
    const address = form.address.value;

    const userAddress = {
      user: user.email,
      name,
      number,
      region,
      city,
      zone,
      address,
    };
    axios.post("http://localhost:5000/users", { userAddress }).then((res) => {
      if (res.data) {
        axios(`http://localhost:5000/user?email=${user.email}`).then((res) => {
          setAddress(res.data);
        });
      }
    });
  };

  useEffect(() => {
    axios(`http://localhost:5000/user?email=${user.email}`).then((res) => {
      setAddress(res.data);
    });
  }, []);

  const handleConfromOrder = () => {
    // orderProducts.map((product) => {
    //   console.log(product);
    //   axios
    //     .post("http://localhost:5000/confrom-order", {
    //       user: user.email,
    //       product,
    //       address: address.address,
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //     });
    // });
  };

  return (
    <div className="grid grid-cols-2 gap-5 mx-20">
      <div>
        <div className="bg-white p-5 mt-3">
          <div className="flex justify-between mb-5">
            <div>
              <h1>Item subtotal</h1>
              <h1>Shipping fee</h1>
            </div>
            <div>
              <h1>${subTotalPrice.toFixed(2)}</h1>
              <h1>${((subTotalPrice / 100) * 2).toFixed(2)}</h1>
            </div>
          </div>
          <hr />
          <div className="font-bold flex justify-between mt-3">
            <h1>Subtotal excl. tax</h1>
            <h1>${(subTotalPrice + (subTotalPrice / 100) * 2).toFixed(2)}</h1>
          </div>
        </div>
        {address?.email ? (
          <div>
            <div className=" p-3 my-5 bg-white">
              <div className="font-bold mb-2 flex items-center justify-between">
                <h1>Address</h1>
                <button className="text-blue-600 text-[12px]">Edit</button>
              </div>
              <p className="text-[12px]">
                {address.address.home},{address.address.zone},{" "}
                {address.address.city}, {address.address.region}{" "}
              </p>
            </div>
            <button
              onClick={handleConfromOrder}
              className="w-full text-xl p-2 text-white cursor-pointer bg-orange-500"
            >
              Proceed to Pay
            </button>
          </div>
        ) : (
          <form onSubmit={handleUserAddress}>
            <div className="my-3">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full p-2"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                name="number"
                required
                placeholder="Phone number"
                className="w-full p-2"
              />
            </div>
            <div className="my-3">
              <select
                onChange={handleDistrict}
                name="region"
                className="w-full p-2"
              >
                <option>Region</option>
                {division.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-3">
              <select
                onChange={handleUpazila}
                name="city"
                className="w-full p-2"
              >
                <option>City</option>
                {districts.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-3">
              <select name="zone" className="w-full p-2">
                <option>Zone</option>
                {upazila.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-3">
              <input
                type="text"
                name="address"
                required
                placeholder="Address"
                className="w-full p-2"
              />
            </div>
            <button className="w-full text-xl p-2 text-white cursor-pointer bg-orange-500">
              Add Your Address
            </button>
          </form>
        )}
      </div>
      <div>
        {orderProducts.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-5 w-full mt-3 bg-white gap-5 p-3"
          >
            <img className="w-10 h-10" src={product.order.thumbnail} alt="" />
            <div className="col-span-3">
              <h1>{product.order.title}</h1>
              <div className="flex items-center gap-5">
                <p className="font-bold">Total : ${product.order.totalPrice}</p>
                <p>Qty : {product.order.quantity}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleDeleteOrderProduct(product._id)}
                className="text-[12px] font-bold text-white py-1 px-2 bg-orange-500 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
