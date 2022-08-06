import React from "react";
import { useNavigate } from "react-router-dom";
import "./Teams.scss";
import "./Teams.css";

const Teams = () => {

  const navigate = useNavigate();

  const coreTeam = () => {
    navigate("/teams")
  }

  return (
    <div className="home-event" id="Teams">
      <div className="heading">Our Team</div>
      <div className="subheading">
        Well organized event. Loved the enthusiasm of the students. One of the
        most growing E-Cell of India. A very hardworking team walking with a
        zeal.
      </div>
      <div className="buttons">
        <div className="joinButton"><a href="https://ik.imagekit.io/officialprashant/Brochure/E_Cell_IIIT_Sonepat_uJjfnSY1c.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1656340749523" target="_blank" rel="noopener noreferrer">Brochure</a></div>
        <div onClick={coreTeam} className="coreTeamButton">Core Team</div>
      </div>
    </div>
  );
};

export default Teams;


