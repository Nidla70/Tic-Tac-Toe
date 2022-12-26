import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { useState } from "react";
import JoinGame from "./components/JoinGame";
import { Chat } from "stream-chat-react";

function App() {
  const api_key = "vwfng3aa2jet";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setisAuth] = useState(false);

  const logout = () => {
    cookies.remove("token");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("username");
    cookies.remove("userId");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    client.disconnectUser();
    setisAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setisAuth(true);
      });
  }

  return (
    <div className="gap-x-4 flex items-center justify-center h-screen w-screen">
      {isAuth ? (
        <Chat client={client}>
          <JoinGame />
          <button
            className="inline-block px-6 py-2.5
           bg-blue-600 text-white font-medium text-xs 
           leading-tight uppercase rounded shadow-md hover:bg-blue-700 
           hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
           active:shadow-lg transition duration-150 ease-in-out"
            onClick={logout}
          >
            Log Out
          </button>
        </Chat>
      ) : (
        <>
          <SignUp setisAuth={setisAuth} />
          <Login setisAuth={setisAuth} />
        </>
      )}
    </div>
  );
}

export default App;
