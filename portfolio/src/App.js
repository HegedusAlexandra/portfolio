import "./App.css";

import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {

  const [navStyle, setNavStyle] = useState("closedNavHolder");
  const [buttonStyle, setButtonStyle] = useState("closedButton");
  const [menuStyle, setMenuStyle] = useState("closedMenu");

  function openMenu() {
    menuStyle === "closedMenu"
      ? setMenuStyle("openedMenu")
      : setMenuStyle("closedMenu");
    buttonStyle === "closedButton"
      ? setButtonStyle("openedButton")
      : setButtonStyle("closedButton");
    navStyle === "closedNavHolder"
      ? setNavStyle("openedNavHolder")
      : setNavStyle("closedNavHolder");
  }

  return (
    <div className="App">
      <div className="boxWave">
        <div className="hl1"></div>
        <div className="hb">
            <div className={navStyle}>
            <button id={buttonStyle} onClick={openMenu}>
              {menuStyle === "closedMenu" ? "Menu" : "Close"}
            </button>
            {menuStyle === "closedMenu" && <button id=""></button>} 
            {menuStyle === "closedMenu" && <button id=""></button>}           
            <nav className={menuStyle}>
              <Link to="/motivation">Motivation</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
            </div>            
            <div className="boxToFill">
              <div className="boxToFillCover">
                Portfolio
              </div>
              <div className="boxToFillCirlcle">
              </div>
            </div>
            <div className="vl2"></div>       
        </div>
        <div className="hl2"></div>
      </div>
          
    </div>
  );
}

export default App;
