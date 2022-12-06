import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Link to={videoId ? `/video/${videoId}` : null}>
      <div className="box">
        <div className="thumnail">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt="Thumbnail not available"
          />
        </div>
        <div className="details"></div>
      </div>
    </Link>
  );
};
export default VideoCard;
