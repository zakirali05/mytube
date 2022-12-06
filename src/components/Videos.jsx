import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="wrapper flex flex-wrap w-[100vw]  h-[100vh]">
      {videos.map((item, idx) => (
        <div className="box" key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
