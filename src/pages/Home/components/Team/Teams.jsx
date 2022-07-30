import React from "react";
import TeamCard from './TeamCard/TeamCard'
import dp from '../../../../assets/illustrations/lamp.svg'
import "./Teams.scss";

const Teams = () => {
  
  return (
    <div className="home-event" id="Teams">
      <div className="heading">Join Our Team</div>
      <div className="subheading">
        Well organized event. Loved the enthusiasm of the students. One of the
        most growing E-Cell of India. A very hardworking team walking with a
        zeal.
      </div>
      <div className="joinTeamButton">Join Team</div>
      <div className="TeamsHeading">Core Team</div>
      <div className="CoreTeam">
        <TeamCard name="Mukesh Ambani" Position="Designer" Photo={dp}/>
        <TeamCard name="Hanny" Position="React Developer" Photo={dp}/>
        <TeamCard name="Elon Musk" Position="Illustrator" Photo={dp}/>
        <TeamCard name="Elon Musk" Position="Illustrator" Photo={dp}/>
      </div>
      <div className="TeamsHeading">Technical Team</div>
      <div className="CoreTeam">
        <TeamCard name="Mukesh Ambani" Position="Designer" Photo={dp}/>
        <TeamCard name="Hanny" Position="React Developer" Photo={dp}/>
        <TeamCard name="Elon Musk" Position="Illustrator" Photo={dp}/>
        <TeamCard name="Hanny" Position="React Developer" Photo={dp}/>
      </div>
      <div className="TeamsHeading">Design Team</div>
      <div className="CoreTeam">
        <TeamCard name="Mukesh Ambani" Position="Designer" Photo={dp}/>
        <TeamCard name="Hanny" Position="React Developer" Photo={dp}/>
        <TeamCard name="Elon Musk" Position="Illustrator" Photo={dp}/>
        <TeamCard name="Hanny" Position="React Developer" Photo={dp}/>
      </div>
    </div>
  );
};

export default Teams;
