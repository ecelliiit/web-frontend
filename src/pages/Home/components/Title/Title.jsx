import React from "react";
import Fade from 'react-reveal/Fade';
import "./Title.scss";

const Title = () => {
  return (
    <div className="home-title" id="#Home">
     <Fade up> <div className="heading1">Enterpreneurship Cell</div></Fade>
      <Fade up>
        <div className="heading2">IIIT Sonepat</div>
        </Fade>
    </div>
  );
};

export default Title;
