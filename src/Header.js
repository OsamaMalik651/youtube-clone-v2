import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
//import youtube from "./apis/youtube";

function Header({ term }) {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    term(inputSearch);
    setInputSearch("");
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
            alt=""
            className="header__logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <form onSubmit={handleSubmit}>
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSubmit} type="submit">
            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className="header__inputButton" />
            </Link>
          </button>
        </form>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar src="" />
      </div>
    </div>
  );
}

export default Header;
