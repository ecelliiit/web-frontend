import React from "react";
import "./EventCard.scss";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="title">{event?.title}</div>
      <div className="description">{event?.description}</div>
      <div className="border-end"></div>
    </div>
  );
};

export default EventCard;
