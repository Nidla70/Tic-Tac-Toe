import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login(setisAuth) {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", { username, password }).then(
      (res) => {
        const { token, userId, firstName, lastName, username } = res.data;

        cookies.set("token", token);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);
        cookies.set("username", username);
        cookies.set("userId", userId);
        setisAuth(true);
      }
    );
  };

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-blue-300 max-w-md gap-y-18">
        <h1 className="flex text-5xl p-10 justify-center font-semibold">
          Login
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-4"></div>
          <div className="form-group mb-6">
            <input
              onChange={(event) => {
                setUsername(event.target.value);
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
                setPassword(event.target.value);
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
            onClick={login}
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
