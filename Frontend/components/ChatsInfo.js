import Link from "next/link";
import React from "react";

const ChatsInfo = ({ name, lastMssg, timeStamp }) => {
  return (
    <Link href="/chat/ChatSection">
    <div className="grid grid-cols-[32px_auto_auto] grid-rows-[auto_auto] gap-x-2.5 p-3 rounded-[20px] hover:bg-slate-300 hover:shadow-lg transition-colors duration-300 cursor-pointer">
      <p className="row-start-1 row-end-3 col-start-1 col-end-2 flex justify-center items-center font-[Segoe UI] text-2xl font-extrabold text-white bg-[#d9d9d9] h-8 w-8 p-0.5 rounded-full justify-self-center self-center">
        {name[0]}
      </p>
      <p className="row-start-1 row-end-2 col-start-2 col-end-4 font-[Segoe UI] text-xl font-bold text-black">
        {name}
      </p>
      
      <p className="font-[Segoe UI] text-sm text-slate-700">{lastMssg}</p>
      <p className="justify-self-end text-black font-[Segoe UI]">{timeStamp}</p>
    </div>
    </Link>
  );
};

export default ChatsInfo;
