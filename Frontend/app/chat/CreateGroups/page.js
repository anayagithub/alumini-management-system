import React from "react";

const CreateGroups = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center justify-between p-3 gap-5 border-2 border-slate-500 rounded-xl mx-10 bg-white w-full">
        <input
          className="flex-grow border-none outline-0 text-lg ml-2.5 w-full"
          placeholder="Enter Group Name"
        />
        <button className="rounded-full">
          <img
            className="cursor-pointer rounded-full hover:shadow-3xl hover:scale-95 transition-transform duration-500 h-6"
            src="/Images/tick.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CreateGroups;
