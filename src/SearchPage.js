import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";

function SearchPage({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoRow
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <div className="searchPage__Results">{renderedList}</div>
    </div>
  );
}

export default SearchPage;
