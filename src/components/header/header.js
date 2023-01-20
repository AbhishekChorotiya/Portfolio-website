import React from "react";
import classes from "./header.module.css";
import { useState } from "react";
const Header = () => {
  const logo = "<A/>";

  const [collapsed, setCollapsed] = useState(false);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  return (
    <div id="header" className={classes.header}>
      <div className={classes.left_div}>
        <a href="/" className={classes.logo}>
          {logo}
        </a>
        <button className={!collapsed?classes.toggle_button :classes.toggle_button2} onClick={toggleNavbar}>
          {''}
        </button>
      </div>
    <div className={classes.right_warp}>
      <div className={collapsed ? classes.right_div : classes.slide}>
        <label className={classes.label}>
          01.
          <a className={classes.navigation} href="/">
            Home
          </a>
        </label>
        <label className={classes.label}>
          02.
          <a className={classes.navigation} href="#secondSection">
            Projects
          </a>
        </label>
        <label className={classes.label}>
          03.
          <a className={classes.navigation} href="#thirdSection">
            Skills
          </a>
        </label>
        <label className={classes.label}>
          04.
          <a className={classes.navigation} href="/">
            Contact
          </a>
        </label>
        <label className={classes.label}>
          05.
          <a className={classes.navigation} href="/">
            About
          </a>
        </label>
      </div>
      </div>
    </div>
  );
};

export default Header;
