import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";
import VideoPlayer from "./VideoPlayer";

function SearchPage({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoRow
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}

        // description={video.snippet.description}
        // timpestamp={video.snippet.publishTime}
        // channel={video.snippet.channelTitle}
        // title={video.snippet.title}
        // image={video.snippet.thumbnails.medium.url}
        // id={video.id.videoId}
        // onVideoSelect={onVideoSelect}
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
      <div className="searchPage__Results">
        {renderedList}
        <hr />
      </div>
    </div>
  );
}

export default SearchPage;
