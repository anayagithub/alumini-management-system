import React from "react";

import MessagerOther from "@/components/MessagerOther";
import MessageSelf from "@/components/MessageSelf";

const ChatMain = ({ name = "Ifra", timeStamp = "today" }) => {
  return (
    <div className="flex flex-col flex-[0.7] rounded-lg h-full ">
      <div className="bg-white p-3 m-2 rounded-lg border-2 border-slate-500 flex items-center">
        <p className="row-start-1 row-end-3 col-start-1 col-end-2 flex justify-center items-center font-[Segoe UI] text-2xl font-extrabold text-white bg-[#d9d9d9] h-7 w-7 p-0.5 rounded-full justify-self-center self-center">
          {name[0]}
        </p>
        <div className="col-start-2 flex flex-col flex-1 pl-5">
          <p className="font-[Segoe UI] text-sm font-bold text-black">{name}</p>
          <p className="text-black text-sm font-[Segoe UI]">{timeStamp}</p>
        </div>

        <button className="rounded-full">
          <img
            className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
            src="/Images/delete.png"
            alt="delete"
          />
        </button>
      </div>
      <div className="bg-white border-2 border-slate-500 p-3 m-2 rounded-lg flex-1 overflow-y-scroll scrollbar-hide">
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        <MessagerOther />
        <MessageSelf />
        
      </div>
      <div className="flex justify-between border-2 border-slate-500 bg-white p-3 m-2 rounded-lg">
        <input
          className=" flex flex-1 outline-0 border-none ml-[10] text-md mr-2 "
          placeholder="Type a Message"
        />
        <button className="rounded-full">
          <img
            className=" rounded-full hover:shadow-3xl hover:scale-95 transition-transform  duration-500 h-6"
            src="/Images/send.png"
            alt="send"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatMain;
