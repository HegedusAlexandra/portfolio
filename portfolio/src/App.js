import "./App.css";

import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import szürke from './szürke.mp4'

function App() {
  const [navStyle, setNavStyle] = useState("closedNavHolder");
  const [buttonStyle, setButtonStyle] = useState("closedButton");
  const [menuStyle, setMenuStyle] = useState("closedMenu");
  const [backgroundBoxStyle, setBBStyle] = useState("backgroundBox");
  const [colorBox,setColorBox] = useState("color");

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
    backgroundBoxStyle === "closedBackgroundBox"
      ? setBBStyle("backgroundBox")
      : setBBStyle("closedBackgroundBox");
    colorBox ==="color"
      ? setColorBox("menuColor")
      : setColorBox("color"); 
    }

  return (
    <div className="App">
      <div id={colorBox}></div>
      <div className={backgroundBoxStyle}>        
        <div className="hb">
          <div className={navStyle}>
            <button id={buttonStyle} onClick={openMenu}>
              {menuStyle === "closedMenu" ? "Menu" : "Close"}
            </button>
             {menuStyle === "openedMenu" && <video autoPlay controls loop src={szürke} type="video/mp4"></video>}
             <nav className={menuStyle}>
              <Link to="/motivation">Motivation</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
            
          </div>
          <div className="boxToFill">
            <div className="boxToFillCover">{menuStyle === "closedMenu" ? "portfolio" : ""}</div>
            <div className="boxToFillCirlcle"></div>  
            <div id="me"></div>          
          </div>
          <div id="rightSide">
          {menuStyle === "closedMenu" && <button id="github">Github</button>}
          {menuStyle === "closedMenu" && (
               <button id="facebook">Facebook</button> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
