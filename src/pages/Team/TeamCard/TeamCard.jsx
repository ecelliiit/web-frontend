import React from "react";
import './TeamCard.scss'

const TeamCard = (props) => {
  return (
    <div className="team-card">
      <img src={props.Photo} alt="" />
      <div className="name">{props.name}</div>
      <div className="position">{props.Position}</div>
    </div>
  );
};

export default TeamCard;
