import React from "react";
import Fade from 'react-reveal/Fade';
import "./About.scss";

import Illustration from "../../../../assets/illustrations/illustration3.svg";

const About = () => {
  return (
    <div className="home-about" id="AboutUs">
      <Fade up>
      <div className="heading">What is E-Cell</div>
      </Fade>
      <div className="body">
        <div className="left">
          <div>
            <Fade left>
            Entrepreneurship Cell IIIT Sonepat is a non-profit student
            organization that works to support and unleash the budding
            entrepreneurial minds and promote the start-up culture among the
            students.
          </Fade></div>
          <div><Fade right>
            We at E-Cell link students with mentors, seekers with investors and
            aspiring entrepreneurs with enduring entrepreneurs. By organizing
            several entrepreneurship development programmes and camps, skill
            development workshops and speaker sessions, hosting brainstorming
            competitions, we aim to promote the development of knowledge-based
            enterprises and open doors towards opportunities in inventive areas.
          </Fade></div>
        </div>
        <div className="right">
          <img src={Illustration} alt="illustration" width="300px" />
        </div>
      </div>
    </div>
  );
};

export default About;
