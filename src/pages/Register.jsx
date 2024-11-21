import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <div className="mt-5">
        <Link to="/">Home / </Link>
        <Link>Account / </Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="flex justify-between gap-5 mt-5 text-[14px]">
        <div className="w-[85%]">
          <div className="w-full p-5">
            <h1 className="text-3xl font-bold">Register Account</h1>
            <h2 className="py-5">
              If you already have an account with us, please login at the{" "}
              <Link to="/login" className="font-bold">
                login page
              </Link>
              .
            </h2>
            <h1 className="text-xl mb-5">Your Personal Details</h1>
            <div className="">
              <div className="mb-3">
                <p className="mb-3">Full Name</p>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter your name"
                  />
                </label>
              </div>
              <div className="mb-3">
                <p className="mb-3">Email</p>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="email"
                    className="grow"
                    placeholder="Enter your email"
                  />
                </label>
              </div>
              <div>
                <p className="mb-3">Password</p>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    className="grow"
                    placeholder="password"
                  />
                </label>
              </div>
              <p className="my-3 text-xl">Newsletter</p>
              <div className="flex items-center gap-3">
                <p>Subscription</p>
                <input
                  type="checkbox"
                  className="toggle toggle-xs"
                  defaultChecked
                />
              </div>
              <div className="flex justify-end">
                <button className="uppercase py-3 px-5 rounded-xl mt-5 bg-black text-white">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <p className="border py-2 px-5">
            <Link to="/login">Login</Link>
          </p>
          <p className="border py-2 px-5">
            <Link to="/register">Register</Link>
          </p>
          <p className="border py-2 px-5">Forgotten Password</p>
          <p className="border py-2 px-5">My Account</p>
          <p className="border py-2 px-5">Address Book</p>
          <p className="border py-2 px-5">Wish List</p>
          <p className="border py-2 px-5">Order</p>
          <p className="border py-2 px-5">Download</p>
          <p className="border py-2 px-5">Subscriptions</p>
          <p className="border py-2 px-5">Reword</p>
          <p className="border py-2 px-5">Returns</p>
          <p className="border py-2 px-5">Transaction</p>
          <p className="border py-2 px-5">Newsletter</p>
        </div>
      </div>
    </div>
  );
};
