import React from "react";
import HomeIcon from "./HomeIcon";
import BookmarksIcon from "./BookmarksIcon";
import AddIcon from "./AddIcon";
import ProfileIcon from "./ProfileIcon";
import "./Css/Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <HomeIcon />
          Home
        </li>
        <li>
          <BookmarksIcon /> Bookmarks
        </li>
        <li>
          <AddIcon /> Add
        </li>
        <li>
          <ProfileIcon /> Profile
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
