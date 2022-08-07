import React from "react";
import "./Gallery.scss";
import Slider from "./Slider";
import { images } from "./database"

function Gallery() {

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-container">
        <div className="gallery-image">
          {images.map((slide, slideIndex) => (
          <Slider
            key={slideIndex}
            slideNumber={slide.links}
          >
          </Slider>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery;
