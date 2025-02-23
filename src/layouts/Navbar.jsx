import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";

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
            NANASHOP
          </Link>
        </div>
        <div className="border border-black rounded-full flex items-center justify-center">
          <select className="py-2 px-2 rounded-l-full border-r border-black outline-none">
            <option disabled selected>
              All Categore
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Type here"
              className="py-2 px-5 border-none outline-none w-96 rounded-r-full"
            />
            <div className="absolute right-2 top-0 p-1 h-full rounded-r-full flex items-center justify-center">
              <BsSearch className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-2xl">
          <Link>
            <MdOutlineMessage />
          </Link>
          <Link>
            <GoChecklist />
          </Link>
          <Link className="">
            <LuShoppingCart />
          </Link>
          <Link to="/login">
            <FaRegUserCircle />
          </Link>
        </div>
      </div>

      {/* navlink  */}
      <div className="flex items-center justify-between mb-5">
        <div className="ml-20 flex items-center justify-center gap-10">
          <Link>Shop</Link>
          <Link>About</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </div>
        <div className="flex items-center justify-center gap-10 mr-5">
          <Link>Get the app</Link>
          <Link>Help center</Link>
        </div>
      </div>
    </div>
  );
};
