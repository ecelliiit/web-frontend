import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="home-footer" id="ContactUs">
      <div className="copyright">
        © 2022 E-Cell IIIT Sonepat. All rights reserved
      </div>
      <div className="quicklinks">
        <div>
          <div className="heading">E - Cell</div>
          <ul>
            <li>Vision</li>
            <li>Blog</li>
            <li><a href="https://www.youtube.com/channel/UCSLfrQ-S9uimhsO5tqPBRNA/featured" target="_blank">Youtube</a></li>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
