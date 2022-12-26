import React, { useState } from "react";
import { useChatContext, Channel } from "stream-chat-react";
import Game from "./Game";

const JoinGame = () => {
  const [rivalUsername, setrivalUsername] = useState("");
  const { client } = useChatContext();
  const [channel, setChannel] = useState(null);

  const createChannel = async () => {
    const response = await client.queryUsers({ name: { $eq: rivalUsername } });

    if (response.users.length === 0) {
      alert("user not found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
  };
  return (
    <>
      <div className="">
        {channel ? (
          <Channel channel={channel}>
            <Game channel={channel} />
          </Channel>
        ) : (
          <div className="flex items-center justify-center gap-x-3 text-3xl">
            <h1>GAME:</h1>
            <input
              placeholder="username of rival.."
              onChange={(event) => {
                setrivalUsername(event.target.value);
              }}
            ></input>

            <button
              onClick={createChannel}
              className="inline-block px-6 py-2.5 flex justify-center items-center
           bg-blue-600 text-white font-medium text-xs 
           leading-tight uppercase rounded shadow-md hover:bg-blue-700 
           hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
           active:shadow-lg transition duration-150 ease-in-out"
            >
              Start/Join Game
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default JoinGame;
