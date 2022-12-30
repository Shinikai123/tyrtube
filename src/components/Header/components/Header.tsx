import React, { useState } from "react";
import "../styles/header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../../assets/logo.png";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import AccountLogo from "../../../assets/profile-pic.png";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputSearch(event.target.value)
  }
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon style={{ fontSize: 28 }} className="header_icon" />
        <Link to="/">
          <img  className="header_logo" src={Logo} alt="Tyrtube"></img>
        </Link>
        </div>

      <div className="header_middle">
        <input
          onChange={handleChange}
          value={inputSearch}
          type="text"
          placeholder="Search"
        /><div className="search_icon">
          <SearchIcon/>
          </div>
      </div>

      <div className="header_right">
        <VideocamIcon style={{ fontSize: 28 }} className="header_icon" />
        <AppsIcon style={{ fontSize: 28 }} className="header_icon" />
        <NotificationsIcon style={{ fontSize: 28 }} className="header_icon" />
        <Avatar
          alt="Andrew Mihaylov"
          src={AccountLogo}
          className="header_avatar"
        />
      </div>
    </div>
  );
}

export default Header;
