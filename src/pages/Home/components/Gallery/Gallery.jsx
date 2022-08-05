import React from "react";
import "./Gallery.scss";
import Slider from "./Slider";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-title">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-container">
        <div className="gallery-image">
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
