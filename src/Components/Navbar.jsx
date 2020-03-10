import React from "react";

function Navbar(props) {
  return (
    <header>
      <h1 id="pageHeading">HOME</h1>
      <ul className="navBox" id="navigationBar">
        <li onClick={() => props.changeState(0)} className="navItem">
          Home
        </li>
        |
        <li onClick={() => props.changeState(1)} className="navItem">
          News
        </li>
        |
        <li onClick={() => props.changeState(2)} className="navItem">
          Link 2
        </li>
        |
        <li onClick={() => props.changeState(3)} className="navItem">
          Link 3
        </li>
      </ul><br />
      <span style={{color: "#e0e0e8"}}>Made with</span><img id="reactLogo" src="https://media2.giphy.com/media/iFmw13LV1hHhViPPWz/source.gif" alt="React logo"/>
    </header>
  );
}

export default Navbar;
