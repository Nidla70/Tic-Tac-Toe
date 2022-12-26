import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp(setisAuth) {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

  const signUp = () => {
    Axios.post("http://localhost:3001/signup", user).then((res) => {
      const { token, userId, firstName, lastName, username, hashedPassword } =
        res.data;

      cookies.set("token", token);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("username", username);
      cookies.set("userId", userId);
      cookies.set("hashedPassword", hashedPassword);
      setisAuth(true);
    });
  };

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-blue-300 max-w-md gap-y-18">
        <h1 className="flex text-5xl p-10 justify-center font-semibold">
          Sign up
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onChange={(event) => {
                  setUser({ ...user, firstName: event.target.value });
                }}
                type="text"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onChange={(event) => {
                  setUser({ ...user, lastName: event.target.value });
                }}
                type="text"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp124"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              onChange={(event) => {
                setUser({ ...user, username: event.target.value });
              }}
              type="text"
              className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              type="password"
              className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <button
            onClick={signUp}
            type="submit"
            className="
  w-full
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
