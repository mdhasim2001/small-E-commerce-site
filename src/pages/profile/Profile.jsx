import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userAddress, setUserAddress] = useState([]);

  // const { name, email, number } = userAddress;
  // const { home, zone, city, region } = userAddress.address;

  useEffect(() => {
    axios(`http://localhost:5000/user?email=${user.email}`).then((res) => {
      setUserAddress(res.data);
    });
  }, []);

  return (
    <div className="mx-10">
      <div className="w-full my-3 flex gap-5">
        <div className="w-3/4 bg-white p-3 h-max">
          <h1 className="pl-5">My Orders</h1>
          <div className="p-5">
            <div className="flex items-center justify-between bg-white gap-5 mb-5 border-b p-2">
              <div>
                <p>1</p>
              </div>
              <div>
                <p>45834758437284</p>
              </div>
              <div>
                <p>11/5/2025</p>
              </div>
              <img
                className="w-10 h-10 rounded-lg hidden md:block"
                src="https://s.alicdn.com/@sc04/kf/Hbd58ba70ce5c4c5eb2cb559263abcf6dQ.jpg_480x480.jpg"
                alt=""
              />
              <div className="">
                <p className="font-bold">$520.00</p>
              </div>
              <div>
                <p>Pending</p>
                <p className="hidden">Receve</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-5">
          <div className="bg-white p-3">
            <h1>
              Personal Profile | <button className="text-blue-600">Edit</button>
            </h1>
            <div className="my-5 text-[14px] text-gray-600">
              <p>Name : {userAddress.address?.name}</p>
              <p>Email : {userAddress.email}</p>
              <p>Phone : {userAddress.address?.number}</p>
            </div>
          </div>
          <div className="bg-white p-3">
            <h1 className="flex items-center gap-1">
              Address Book{" "}
              {userAddress ? (
                <div>
                  | <button className="text-blue-600">Edit</button>
                </div>
              ) : (
                ""
              )}
            </h1>
            {userAddress ? (
              <div>
                <h1 className="font-bold mt-5">{userAddress.address?.name}</h1>
                <div className="my-2 text-[14px] text-gray-600">
                  <p>
                    {userAddress.address?.home} {userAddress.address?.zone}{" "}
                    {userAddress.address?.city} {userAddress.address?.region}
                  </p>
                  <p>(+880) {userAddress.address?.number}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center p-5">
                <button className="w-full py-2 bg-gray-100 rounded-lg font-bold">
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
