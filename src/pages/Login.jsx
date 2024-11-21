import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div className="mt-5">
        <Link to="/">Home / </Link>
        <Link>Account / </Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="w-full flex justify-between gap-5 mt-5 text-[14px]">
        <div className="w-[70] flex gap-5">
          <div className="flex-1 border p-5">
            <h1 className="text-3xl font-bold">New Customer</h1>
            <h2 className="py-5">Register Account</h2>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <div className="flex justify-end">
              <button className="uppercase py-3 px-5 border rounded-xl mt-5 bg-black text-white">
                continue
              </button>
            </div>
          </div>
          <div className="flex-1 border p-5">
            <h1 className="text-3xl font-bold">Returning Customer</h1>
            <h2 className="py-5">I am a returning customer</h2>
            <div className="">
              <div className="mb-3">
                <p className="mb-3">Email</p>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter your email"
                  />
                </label>
              </div>
              <div>
                <p className="mb-3">Password</p>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="password"
                  />
                </label>
              </div>
              <p className="my-3">Forgotten Password</p>
              <div className="flex justify-end">
                <button className="uppercase py-3 px-5 rounded-xl mt-5 bg-black text-white">
                  login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
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
