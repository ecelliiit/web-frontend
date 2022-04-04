import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="home-footer">
      <div className="copyright">
        © 2022 E-Cell IIIT Sonepat. All rights reserved
      </div>
      <div className="quicklinks">
        <div>
          <div className="heading">E - Cell</div>
          <ul>
            <li>Vision</li>
            <li>Blog</li>
            <li>Youtube</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="heading">Support</div>
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>About us</li>
            <li>Our Teams</li>
          </ul>
        </div>
        <div>
          <div className="heading">Follow us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
