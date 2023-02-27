import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToAbout = () => {
    const aboutUs = document.querySelector("#About");
    aboutUs.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToHome = () => {
    const aboutUs = document.querySelector("#HomeSection");
    aboutUs.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToContact = () => {
    const aboutUs = document.querySelector("#Contact");
    aboutUs.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToVision = () => {
    const aboutUs = document.querySelector("#Vision");
    aboutUs.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="home-footer">
      <div className="copyright">
        © 2022 E-Cell IIIT Sonepat | All rights reserved
      </div>
      <div className="quicklinks">
        <div>
          <div className="heading">E Cell</div>
          <ul>
            <li onClick={scrollToVision}>Vision</li>
            <li>
              <a href="https://linktr.ee/ecelliiitsonepat">Linktree</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCSLfrQ-S9uimhsO5tqPBRNA">
                Youtube
              </a>
            </li>
            <li onClick={scrollToContact}>Contact</li>
          </ul>
        </div>
        <div>
          <div className="heading">Support</div>
          <ul>
            <li onClick={scrollToHome}>Home</li>
            <li>
              <Link to="/events">Event</Link>
            </li>
            <li onClick={scrollToAbout}>About Us</li>
            <li>
              <Link to="/teams">Our Team</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="heading">Follow us</div>
          <ul>
            <li>
              <a href="https://www.facebook.com/E-Cell-IIIT-Sonepat-113917040446486">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ecelliiits">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/ecell.iiitsonepat/">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ecelliiitsonepat">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
