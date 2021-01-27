import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

function VideoCard({ video, onVideoSelect }) {
  const timestamp = video.snippet.publishTime.slice(0, 10);
  const channel = video.snippet.channelTitle;
  const title = video.snippet.title;
  const image = video.snippet.thumbnails.medium.url;
  return (
    <div className="videoCard" onClick={() => onVideoSelect(video)}>
      <Link className="videoCard__Link" to={`/videoplayer`}>
        <div className="videoCard__thumbnail">
          <img src={image} alt="" />
        </div>

        <div className="videoCard__info">
          <div className="videoCard__title">
            <h4>{title}</h4>
          </div>

          <div className="videoCard__text">
            <p>{channel}</p>
            <p>{timestamp}</p>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  );
}

export default VideoCard;
