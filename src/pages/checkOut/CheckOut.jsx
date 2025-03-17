import axios from "axios";
import React, { useEffect, useState } from "react";

export const CheckOut = () => {
  const [division, setDivision] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [districts, setDistricts] = useState([]);

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

    const userAddress = { name, number, region, city, zone, address };
    console.log(userAddress);
  };

  return (
    <div className="grid grid-cols-2 gap-5 mx-5">
      <div>
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
            <select onChange={handleUpazila} name="city" className="w-full p-2">
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
          <button className="w-full p-2 cursor-pointer bg-orange-500">
            Submit
          </button>
        </form>
      </div>
      <div className="bg-white p-5 mt-3">
        <div className="flex justify-between mb-5">
          <div>
            <h1>Item subtotal</h1>
            <h1>Shipping fee</h1>
          </div>
          <div>
            <h1>$500</h1>
            <h1>$50</h1>
          </div>
        </div>
        <hr />
        <div className="font-bold flex justify-between mt-3">
          <h1>Subtotal excl. tax</h1>
          <h1>$550</h1>
        </div>
      </div>
    </div>
  );
};
