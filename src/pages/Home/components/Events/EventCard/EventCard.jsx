import React from "react";
import "./EventCard.scss";
import Fade from 'react-reveal/Fade';
const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <Fade up>
      <div className="title">{event?.title}</div></Fade>
      <div className="description">{event?.description}</div>
      <div className="border-end"></div>
      </div>
  );
};

export default EventCard;
