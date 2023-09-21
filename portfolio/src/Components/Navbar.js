import React from "react";
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Container">
      <div className="logo">
        <img src="./images/collaborative.png" />
      </div>
      <div className="Nav-Content">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </div>

    </div>
  );
};

export default Navbar;
