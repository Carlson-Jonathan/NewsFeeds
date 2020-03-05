import React from "react";

function Navbar(props) {
  return (
    <header>
      <h1>Page Heading</h1>
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
        |
        <li onClick={() => props.changeState(4)} className="navItem">
          Link 4
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
