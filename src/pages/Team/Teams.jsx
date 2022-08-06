import React from "react";
import TeamCard from './TeamCard/TeamCard'
import "./Teams.scss";
import data from './Team'

function createCard(props) {
  return (
    <TeamCard
      key={props.key}
      name={props.name}
      Position={props.position}
      Photo={props.img}
    />
  );
}

const Teams = () => {
  return (
    <div className="home-event" id="Teams">
      <div className="heading">Our Team</div>
      <div className="subheading">
        Well organized event. Loved the enthusiasm of the students. One of the
        most growing E-Cell of India. A very hardworking team walking with a
        zeal.
      </div>
      <div className="joinTeamButton"><a href="https://ik.imagekit.io/officialprashant/Brochure/E_Cell_IIIT_Sonepat_uJjfnSY1c.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1656340749523" target="_blank" rel="noopener noreferrer">Brochure</a></div>
      <div className="TeamsHeading">Core Team</div>
      <div className="CoreTeam">
        {data.map(createCard)}
      </div>
    </div>
  );
};

export default Teams;
