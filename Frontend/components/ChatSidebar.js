"use client";
import React from "react";
import ChatsInfo from "./ChatsInfo";
import Link from "next/link";


const ChatSidebar = () => {
  const [chats, setchats] = React.useState([
    {
      name: "Test#1",
      lastMssg: "Last Massage #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMssg: "Last Massage #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMssg: "Last Massage #3",
      timeStamp: "yesterday",
    },
  ]);
  return (
    <div className="flex-[0.3] flex flex-col rounded-3xl h-full">
      <div className="flex p-3 justify-between border-2 border-slate-500 rounded-lg m-2 bg-white">
        <div>
          <button className="rounded-full ">
            <img
              className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
              src="/Images/user.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex gap-5">
          <Link href="/chat/CreateGroups">
          <button className="rounded-full ">
            <img
              className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
              src="/Images/add.png"
              alt=""
            />
          </button>
          </Link>
          <Link href="/chat/OnlineUser">
          <button className="rounded-full ">
            <img
              className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
              src="/Images/personadd.png"
              alt=""
            />
          </button>
          </Link>
        <Link href="/chat/AvailableGroups">
        <button className="rounded-full ">
            <img
              className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
              src="/Images/groupadd.png"
              alt=""
            />
          </button>
        </Link>
        </div>
      </div>
      <div className="flex items-center p-3 gap-5 border-2 border-slate-500 rounded-lg m-2 bg-white ">
        <button className="rounded-full ">
          <img
            className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
            src="/Images/search.png"
            alt=""
          />
        </button>
        <input
          className="flex-grow border-none outline-0 text-lg font-bold"
          placeholder="Search"
        />
      </div>
      <div className="border-2 border-slate-500 rounded-lg  flex flex-1 flex-col p-3 m-2 bg-white ">
       {/* <Link href="/chats/ChatSection"> */}
       {chats.map((chat, index) => (
          <ChatsInfo
            key={index}
            name={chat.name}
            lastMssg={chat.lastMssg}
            timeStamp={chat.timeStamp}
          />
        ))}
       {/* </Link> */}
      </div>
     
    </div>
  );
};

export default ChatSidebar;
