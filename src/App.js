import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import youtube from "./apis/youtube";
import VideoPlayer from "./VideoPlayer";
import MainPage from "./MainPage";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const defaultVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  // defaultVideos(term);

  const onSubmit = async (searchTerm) => {
    //setSearchTerm(inputSearch);
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    // console.log(selectedVideo);
  };
  return (
    <div className="App">
      <Router>
        <Header term={onSubmit} />
        <Switch>
          <Route path="/videoplayer">
            <div className="app__page">
              <VideoPlayer video={selectedVideo} />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SearchPage
                className="searchPage"
                videos={videos}
                onVideoSelect={onVideoSelect}
              />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar className="sidebar" />
              <MainPage
                term={defaultVideos}
                videos={videos}
                onVideoSelect={onVideoSelect}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
