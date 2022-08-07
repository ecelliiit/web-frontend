import React from "react";
import "./JoinCommunity.scss";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CalendarSVG from "../../../../assets/illustrations/calendar.svg";
import CommunitySVG from "../../../../assets/illustrations/community.svg";

const JoinCommunity = () => {
  const [input, setInput] = useState(false);

  const notify = () =>
    toast("Subscribed Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  const handleInput = () => {
    axios
      .post("https://ecell-iiits-backend.herokuapp.com/subscriber", {
        first_name: "Subscriber",
        last_name: "E Cell IIIT Sonepat",
        email: input,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="home-community" id="Contact">
      <div className="heading">Join Our Community</div>
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
            <button onClick={handleInput}>Subscribe</button>
          </div>
        </div>
      </div>
      {/* <div className="calendar">
        <img className="calendar-img" src={CalendarSVG} alt="calendar-svg" />
      </div> */}
    </div>
  );
};

export default JoinCommunity;
