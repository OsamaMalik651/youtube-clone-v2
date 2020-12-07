import React from "react";
import "./VideoRow.css";
import { Link } from "react-router-dom";
function VideoRow({ video, onVideoSelect }) {
  const description = video.snippet.description;
  const timpestamp = video.snippet.publishTime.slice(0, 10);
  const channel = video.snippet.channelTitle;
  const title = video.snippet.title;
  const image = video.snippet.thumbnails.medium.url;
  const id = video.id.videoId;

  return (
    <div className="videoRow" onClick={() => onVideoSelect(video)}>
      <Link to={`/videoplayer`}>
        <div className="videoRow__text">
          <img src={image} alt="" />
          <h3>{title}</h3>
        </div>
      </Link>
      <div className="videoRow__headline">
        <p>
          {channel} • {timpestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
