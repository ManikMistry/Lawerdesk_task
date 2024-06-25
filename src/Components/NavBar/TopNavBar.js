import React from "react";
import "./TopNavBar.css";
import {
  FaSearch,
  FaUserCircle,
  FaCog,
  FaNewspaper,
  FaUserFriends,
  FaHome,
  FaComment,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <div className="logo">
        <em>A</em>DVOCASE
      </div>
      <div className="nav-links">
        <a href="#news-feed">
          <FaNewspaper className="icon" /> News Feed
        </a>
        <a href="#find-lawyers">
          <FaUserFriends className="icon" /> Find Lawyers
        </a>
        <Link to="/">
          <a href="#home" className="home-link">
            <FaHome className="icon" /> Home
          </a>
        </Link>
        <a href="#connections">
          <FaUserCircle className="icon" /> Connections
        </a>
        <a href="#chats">
          <FaComment className="icon" /> Chats
        </a>
      </div>
      <div className="nav-icons">
        {/* <FaSearch className="icon search-icon" /> */}
        <FaCog className="icon settings-icon" />
        <FaBell className="icon alert-icon" />
        <FaUserCircle className="icon user-icon" />
      </div>
    </div>
  );
};

export default TopNavBar;
