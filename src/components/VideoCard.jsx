import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId, channelId },
    snippet,
  },
}) => {
  return (
    <Link to={videoId ? `/video/${videoId}` : null}>
      <div className="box my-4 lg:w-[60%]  bg-slate-900 ">
        <img
          className="w-[358px] h-[180px]"
          src={snippet?.thumbnails?.high?.url}
          alt="Thumbnail not available"
        />

        <div className="details ">
          <Link to={videoId ? `/video/${videoId}` : null}>
            {" "}
            <h1 className="text-white text-bold p-4">
              {snippet?.title.slice(0, 60)}...
            </h1>
          </Link>

          <Link to={channelId ? `/channel/${snippet?.channelId}` : null}>
            {" "}
            <h1 className="text-slate-400 pb-2 px-4">
              {snippet?.channelTitle}...
            </h1>
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
