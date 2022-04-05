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
            <li><a href="https://www.facebook.com/E-Cell-IIIT-Sonepat-113917040446486">Facebook</a></li>
            <li><a href="https://twitter.com/ecelliiits">Twitter</a></li>
            <li><a href="https://www.instagram.com/ecell.iiitsonepat/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/ecelliiitsonepat">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
