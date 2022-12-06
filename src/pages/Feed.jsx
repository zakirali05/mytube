import React from "react";

import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Videos from "../components/Videos";

const Feed = ({ selected, setSelected }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c7ba7a97f0msh06f4841a52672d7p1eb204jsnd011d2490f75",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${selected}&part=snippet%2Cid&regionCode=US&maxResults=500&order=date`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideos(response.items))
      .catch((err) => console.error(err));
  }, [selected]);
  return (
    <div className="flex-col lg:flex-row lg:h-[100%] md:h-[100%] h-[100vh]  bg-white">
      <SideBar selected={selected} setSelected={setSelected} />
      <div className="videofeed lg:h-[100%]  lg:top-[3rem] lg:left-[15rem]">
        <h1 className="text-slate-700 font-bold text-2xl p-4 lg:text-3xl">
          {selected} <span className="text-red-400">videos</span>
        </h1>
        <div className="flex-col">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};
export default Feed;
