import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  const { userSignOut } = useContext(AuthContext);
  const handleUserSignOut = () => {
    userSignOut();
    <Navigate to="login" />;
  };
  return (
    <div className="mx-10">
      <button onClick={handleUserSignOut}>Log out</button>
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
              <p>Name : MD Hasim</p>
              <p>Email : nana@gmail.com</p>
              <p>Phone : 000854563565</p>
            </div>
          </div>
          <div className="bg-white p-3">
            <h1>
              Address Book | <button className="text-blue-600">Edit</button>
            </h1>
            <h1 className="font-bold mt-5">MD Hasim</h1>
            <div className="my-2 text-[14px] text-gray-600">
              <p>
                Rajarampur, Chapainawabgonj, Chapainawabgonj Sadar, Rajshahi
              </p>
              <p>(+880) 1284748948</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
