import React from "react";
import "./Navbar.scss";
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <div><Link to="/" className="text-link">Home</Link></div>
      <div><Link to="/About" className="text-link">About us</Link></div>
      <div>Team</div>
      <div><Link to="/Events" className="text-link">Events</Link></div>
      <div><Link to="/Contact" className="text-link">Contact</Link></div>
    </div>
  );
};

export default Navbar;
