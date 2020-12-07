import React from "react";
import "./VideoPlayer.css";

function VideoPlayer({ video }) {
  return (
    <div className="videoplayer">
      <div className="videoplayer__video">
        <iframe
          title="Video Player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="videoplayer__videoInfo">
        <h3 className="videoplayer__title">{video.snippet.title}</h3>
        <p>{video.snippet.publishedAt.slice(0, 10)}</p>
        <hr />
        <div className="videoplayer__VideoDescription"></div>
        <h4 href={`https://www.youtube.com/channel/${video.snippet.channelId}`}>
          {" "}
          {video.snippet.channelTitle}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
