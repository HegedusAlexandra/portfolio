import "./App.css";
import { Link,Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';





function App() {

const [navStyle,setNavStyle] = useState("closedNavHolder")  
const [buttonStyle,setButtonStyle] = useState("closedButton")
const [menuStyle,setMenuStyle] = useState("closedMenu")

function openMenu(){
menuStyle === "closedMenu" ? setMenuStyle("openedMenu") : setMenuStyle("closedMenu");
buttonStyle === "closedButton" ? setButtonStyle("openedButton") : setButtonStyle("closedButton");
navStyle === "closedNavHolder" ? setNavStyle("openedNavHolder") : setNavStyle("closedNavHolder")
}

  return (
    <div className="App">
      <div className={navStyle}>
        <button id={buttonStyle} onClick={openMenu}>{menuStyle === "closedMenu" ? "Menu" : "Close"}</button>
        <nav className={menuStyle}>
          <Link id="motiv" to="/motivation">Motivation</Link>
          <Link id="exp" to="/experience">Experience</Link>
          <Link id="gal" to="/gallery">Gallery</Link>
          <Link id="cont" to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="boxWave">
        <div className="hl1"></div>
        <div className="hb">
          <div className="vl1"></div>
          <div className="vl2"></div>
        </div>
        <div className="hl2"></div>
      </div>
      
    </div>
  );
}

export default App;
