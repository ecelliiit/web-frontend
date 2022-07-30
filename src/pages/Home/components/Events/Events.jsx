import React from "react";
import EventCard from "./EventCard/EventCard";
import "./Events.scss";

const Events = () => {
  const events = [
    {
      title: "Talk With Alumni",
      description:
        "Life is about the experience,Talking with Alumni enables the college students to interact with their successful passed out seniors, knowing about their mistakes and taking learning from them.  Sharing of the wealth of experience and skills with the students.",
    },
    {
      title: "Workshops",
      description:
        "Workshops are important for raising awareness within the community in general. Various workshops on the blockchain, Competitive programming, Health awareness, RPA, etc. These are organized on H2s, Polkadot, D2C, etc.. platforms.",
    },
    {
      title: "Webinars",
      description:
        "Webinars are another way to expand our knowledge, E Cell IIIT Sonepat organizes webinars on diverse subjects, Such as entrepreneurship, Startups, Coding webinars, etc.",
    },
    {
      title: "Bootcamp",
      description:
        "Explain you're the most powerful factor to define how the company's daily operations can be done. Most the people often explain the key factor depends on the primaries and secondaries products/services data",
    },
  ];
  return (
    <div className="home-event" id="Event">
      <div className="heading">Our Events</div>
      <div className="subheading">
        Well organized event. Loved the enthusiasm of the students. One of the
        most growing E-Cell of India. A very hardworking team walking with a
        zeal.
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
