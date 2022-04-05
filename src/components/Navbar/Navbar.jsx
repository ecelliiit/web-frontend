import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar" id="Home">
      <ul>
      <li><a href="#Home">Home</a></li>
      <li><a href="#AboutUs">About Us</a></li>
      <li><a href="#Teams">Team</a></li>
      <li><a href="#Events">Events</a></li>
      <li><a href="#ContactUs">Contact Us</a></li>
    
      </ul>
    </div>
  );
};

export default Navbar;
