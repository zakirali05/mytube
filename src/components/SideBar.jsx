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
  "Gaming",
  "Podcast",
  "Comedy",
  "Discovery",
];
const SideBar = ({ selected, setSelected }) => {
  const change = (category) => {
    setSelected(category);
  };
  return (
    <div className="flex items-center no-scrollbar lg:top-[3rem]  h-12 w-[100%] bg-slate-800 overflow-x-scroll lg:flex-col  lg:fixed lg:left-0 lg:h-[100%] lg:w-[15rem]">
      {side.map((category) => {
        return (
          <button
            onClick={() => change(category)}
            className="lg:py-4 px-4 text-red-300 hover:text-red-400  py-2"
            key={category}
          >
            <span
              className={
                category === selected
                  ? "text-red-700 "
                  : "text-red-300 hover:text-red-700 "
              }
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
