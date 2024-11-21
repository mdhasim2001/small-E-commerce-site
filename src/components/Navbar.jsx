import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="border-b">
      {/* navbar top */}
      <div className="flex items-center justify-between border-b text-[14px]">
        <div>
          <p className="pl-5">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="py-3 px-5 cursor-pointer border-l border-r">Eng</p>
          <p className="py-3 px-5 cursor-pointer border-l border-r">$ USD</p>
          <p className="py-3 px-5 cursor-pointer border-l border-r">
            Track Order
          </p>
          <p className="py-3 px-5 cursor-pointer border-l border-r">
            Help Center
          </p>
        </div>
      </div>

      {/* navbar midil */}
      <div className="flex items-center justify-between py-8 px-5">
        <div>
          <Link to="/" className="uppercase text-3xl">
            hasim
          </Link>
        </div>
        <div>
          <select className="py-2 px-5 border">
            <option disabled selected>
              All Categore
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
          <input
            type="text"
            placeholder="Type here"
            className="py-2 px-5 border w-96"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="w-3">
            <FaShoppingCart />
          </p>
          <Link to="/login">Login</Link>
        </div>
      </div>

      {/* navlink  */}
      <div className="flex items-center justify-between pb-5">
        <div>
          <Link to="/" className="uppercase mx-5 py-1 pr-3">
            home
          </Link>
          <Link className="uppercase mx-5 py-1 px-3">Shop</Link>
          <Link className="uppercase mx-5 py-1 px-3">about</Link>
          <Link className="uppercase mx-5 py-1 px-3">contact</Link>
        </div>
        <div className="mr-5">
          <p>
            Hotline:{" "}
            <samp className="text-red-500 underline cursor-pointer">
              +880 1745-83739
            </samp>
          </p>
        </div>
      </div>
    </div>
  );
};
