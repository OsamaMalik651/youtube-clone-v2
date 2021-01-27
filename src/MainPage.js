import React, { useEffect } from "react";
import "./MainPage.css";
import VideoCard from "./VideoCard";

function MainPage({ term, videos, onVideoSelect }) {
  useEffect(() => {
    term("technology");
  }, []);
  const renderedList = videos.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div className="recommendedVideos">
      <h2>Recommended Videos</h2>
      <div className="recommendedVideos__videos">{renderedList}</div>
    </div>
  );
}

export default MainPage;
