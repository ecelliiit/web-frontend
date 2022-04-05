import React from "react";
import "./Hamburger.scss";

const Hamburger = ()=>{
    return(
        <div className="HamburgerMenu">
            <input type="checkbox"></input>
            <div className="Hamburger-lines">
                <span className="Line Line1"></span>
                <span className="Line Line2"></span>
                <span className="Line Line3"></span>
            </div>
        <ul className="Menu-items"> 
        <li><a href="#Home">Home</a></li>
        <li><a href="#Teams">Teams</a></li>
        <li><a href="#Events">Events</a></li>
        <li><a href="#AboutUs">About Us</a></li>
        <li><a href="#ContactUs">Contact Us</a></li>
        </ul>
        </div>

    )
};
 export default Hamburger;