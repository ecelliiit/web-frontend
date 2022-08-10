import React from "react";
import "./About.scss";

import Illustration from "../../../../assets/illustrations/illustration3.svg";

const About = () => {
  return (
    <div className="home-about" id="About">
      <div className="heading">About Our E Cell</div>
      <div className="body">
        <div className="left">
          <div>
            Entrepreneurship Cell, IIIT Sonepat is a non-profit organization run by
            students and has been established with the objective of developing, enhancing,
            and committing to foster the entrepreneurial spirit amongst the student to
            encourage them to be successful entrepreneurs.
          </div>
          <div>
            We provide a platform to individuals with creative minds and ideas,
            which have the potential for substantial business opportunities.
            We organize entrepreneurship development programs and camps,
            skill development workshops and speaker sessions, hosting brainstorming
            competitions, and many more..
          </div>
        </div>
        <div className="right">
          <img src={Illustration} alt="illustration" width="300px" />
        </div>
      </div>
    </div>
  );
};

export default About;
