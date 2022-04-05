import React from "react";
import EventCard from "./EventCard/EventCard";
import Fade from 'react-reveal/Fade';
import "./Events.scss";

const Events = () => {
  const events = [
    {
      title: "Event 1",
      description:
        "E-Carnival was a two-tier event consisting of Book Fair and Meme War, instilling and improving the ability of creative thinking. The Book Fair in partnership with some online bookstores was carried out to induce a reading culture among students and encourage bookselling startups",
    },
    {
      title: "Event 2",
      description:
      "E-Carnival was a two-tier event consisting of Book Fair and Meme War, instilling and improving the ability of creative thinking. The Book Fair in partnership with some online bookstores was carried out to induce a reading culture among students and encourage bookselling startups"
      ,
    },
    {
      title: "Event 3",
      description:
      "E-Carnival was a two-tier event consisting of Book Fair and Meme War, instilling and improving the ability of creative thinking. The Book Fair in partnership with some online bookstores was carried out to induce a reading culture among students and encourage bookselling startups"
    },
    {
      title: "Event 4",
      description:
      "E-Carnival was a two-tier event consisting of Book Fair and Meme War, instilling and improving the ability of creative thinking. The Book Fair in partnership with some online bookstores was carried out to induce a reading culture among students and encourage bookselling startups"
    },
  ];
  return (
    <div className="home-event" id="Events">
      <Fade up>
      <div className="heading">Our Events</div></Fade>
      <div className="subheading">
        <Fade left>
        Well organized event. Loved the enthusiasm of the students. One of the
        most growing E-Cell of India. A very hardworking team walking with a
        zeal.</Fade>
      </div>
      <div className="events">
        {events.map((ev) => (
          <EventCard event={ev} />
        ))}
      </div>
    </div>
  );
};

export default Events;
