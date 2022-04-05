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
            <li><a href="https://www.facebook.com/pages/category/Education/E-Cell-IIIT-Sonepat-113917040446486/" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/iiit_sonepat?lang=en" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/p/CFjqUItBKvy/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/ecelliiitsonepat/" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
