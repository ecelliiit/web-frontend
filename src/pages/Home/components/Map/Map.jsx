import React from "react";
import "./Map.scss";

const Map = () => {
  return (
    <div className="location-section">
      <div className="left heading">Location</div>
      <div className="home-map">
        <iframe
          title="Ecell IIIT Sonepat"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.188217585773!2d77.1017351150898!3d28.952141382292755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daddf6cade053%3A0xfd7ceeb61e0dbbe1!2sIIT%20Delhi%20Sonipat%20Campus!5e0!3m2!1sen!2sin!4v1649070300073!5m2!1sen!2sin"
          width="100%"
          height="101%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
