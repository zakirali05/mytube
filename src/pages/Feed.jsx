import React from "react";
// import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
const Feed = ({ selected, setSelected }) => {
  return (
    <div className="flex-col lg:flex-row h-[100vh]  bg-slate-600">
      <SideBar selected={selected} setSelected={setSelected} />
      <div className="videofeed lg:fixed lg:top-[3rem] lg:left-[15rem]">
        <h1 className="text-white font-bold text-2xl p-4 lg:text-3xl">
          {selected} <span className="text-red-400">videos</span>
        </h1>
      </div>
    </div>
  );
};
export default Feed;
