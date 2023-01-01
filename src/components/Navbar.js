import React, { useState } from "react";
import logo from "../images/logo1.png";
import menu from "../images/menu.png";
import close from "../images/close.png";

import "../App.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar" id="home">
      <div className="navbarImg">
        <img src={logo} alt="logo" />
      </div>
      <ul className={open ? "openMenu" : "closeMenu"}>
        <li>
          <img
            src={close}
            alt="close"
            onClick={() => setOpen(!open)}
            className={"menuImg"}
            style={
              open
                ? {
                    display: "block",
                    position: "relative",
                    left: "80px",
                    top: "30px",
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                  }
                : {
                    display: "none",
                  }
            }
          />
        </li>
        <li>
          <a href="#home">الرئيسية</a>
        </li>
        <li>
          <a href="#features">مميزتنا</a>
        </li>
        <li>
          <a href="#aboutUs">معلومات عنا</a>
        </li>
        <li>
          <a href="#screenShots">لقطات التطبيق</a>
        </li>
        <li>
          <a href="#comments">اراء عملاءنا</a>
        </li>
      </ul>
      <div className="MenuHed_div">
        <img
          src={menu}
          alt="menu"
          className={"menuImg"}
          onClick={() => setOpen(!open)}
          style={open ? { display: "none" } : { display: "block" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
