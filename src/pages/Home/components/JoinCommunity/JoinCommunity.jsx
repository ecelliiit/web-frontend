import React from "react";
import "./JoinCommunity.scss";
import { useState } from "react";

import CalendarSVG from "../../../../assets/illustrations/calendar.svg";
import CommunitySVG from "../../../../assets/illustrations/community.svg";

const JoinCommunity = () => {
  const [input, setInput] = useState(false);
  return (
    <div className="home-community">
      <div className="heading">Join Community</div>
      <div className="body">
        <div className="img">
          <img src={CommunitySVG} alt="community-svg" />
        </div>
        <div className="details">
          <div className="description">
            Never miss an update ! Sign up for instant updates, cool events and
            a whole bunch of new stuff.
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Your work email address"
              onChange={(e) => {
                e.preventDefault();
                setInput(e.target.value);
              }}
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="calendar">
        <img src={CalendarSVG} alt="calendar-svg" />
      </div>
    </div>
  );
};

export default JoinCommunity;
