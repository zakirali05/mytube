import React from "react";
const side = [
  "New",
  "Jsmastery",
  "Coding",
  "Music",
  "Cooking",
  "Fitness",
  "Movies",
  "Youtube",
  "Reactjs",
  "News",
];
const SideBar = () => {
  return (
    <div className="flex items-center no-scrollbar  h-12 w-[100%] bg-slate-800 overflow-x-scroll lg:flex-col  lg:fixed lg:left-0 lg:h-[100%] lg:w-[15rem]">
      {side.map((category) => {
        return (
          <button
            className=" lg:py-4 px-4 text-red-300 hover:text-red-400  py-2"
            key={category}
          >
            <span>{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
