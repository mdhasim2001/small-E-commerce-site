import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosList } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="border-b">
      {/* navbar top */}
      <div className="lg:flex items-center justify-between border-b text-[14px] hidden">
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
          {/* <p className="py-3 px-5 cursor-pointer border-l border-r">
            Help Center
          </p> */}
        </div>
      </div>

      {/* navbar midil */}
      <div className="flex items-center justify-between py-5 px-5">
        <div>
          <Link to="/" className=" text-3xl font-bold">
            NANA<span className="text-orange-500">.</span>com
          </Link>
        </div>
        <div className="border border-black rounded-full">
          <div className="relative ">
            <input
              type="text"
              placeholder="Type here"
              className="hidden md:flex md:w-[500px] py-2 px-5 border-none rounded-full"
            />
            <div className="absolute right-0 bg-orange-500 top-0 w-16 text-white h-full rounded-r-full flex items-center justify-center">
              <BsSearch className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-xl gap-5">
          {/* <div className="relative">
            <div>
              <Link>
                <MdOutlineMessage />
              </Link>
            </div>
            <div className="absolute right-0 w-[250px] h-[50vh] bg-white border"></div>
          </div>
          <Link>
            <GoChecklist />
          </Link> */}
          <div className="relative">
            <Link to="/shop-card">
              <LuShoppingCart />
            </Link>
            <p className="absolute text-[10px] flex items-center justify-center rounded-full bg-orange-500 -top-2 -right-2 w-3 text-white h-3 p-1">
              {/* {cardProduct.length} */}
            </p>
          </div>
          <div>
            <Link to="profile">
              <FaRegUserCircle />
            </Link>
          </div>
        </div>
      </div>

      {/* navlink  */}
      <div className="md:flex items-center justify-between mx-5 mb-5">
        <div className=" flex items-center justify-center gap-10">
          <h1 className="cursor-pointer flex items-center gap-1">
            <IoIosList />
            All categories
          </h1>
          <h1 className="cursor-pointer">Featured selections</h1>
        </div>
        <div className="hidden md:flex items-center justify-center gap-10">
          <Link>Get the app</Link>
          <Link>Customer service</Link>
        </div>
      </div>
    </div>
  );
};
