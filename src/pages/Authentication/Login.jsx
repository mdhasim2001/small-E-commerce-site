import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

export const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUserSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        if (result) {
          form.reset();
          navigate(location?.pathname ? location.state : "/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="md:w-2/4 mx-auto my-10">
      <div className=" p-5 shadow rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-5">Sign in</h1>
          <p className="mb-5">
            Don't have an account?
            <Link to="/register" className="text-blue-600 underline">
              Create an account
            </Link>
          </p>
        </div>
        <form onSubmit={handleUserSignIn}>
          <div className="mb-3">
            <p className="mb-3">Account</p>
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
                type="email"
                className="grow"
                placeholder="Enter your email"
                name="email"
                required
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
                name="password"
                required
              />
            </label>
          </div>
          <Link className="my-3">Forgotten Password</Link>
          <div className="flex justify-end">
            <button className="uppercase w-full py-3 px-5 rounded-xl mt-5 bg-blue-600 text-white">
              Sign in
            </button>
          </div>
        </form>
        <div>
          <h1 className="my-5 text-center">--------OR---------</h1>
          <Link className="w-full flex items-center justify-center gap-3 border border-blue-200 mt-5 py-3 rounded-lg">
            <FcGoogle className="text-xl" />
            Sign in with google
          </Link>
        </div>
      </div>
    </div>
  );
};
