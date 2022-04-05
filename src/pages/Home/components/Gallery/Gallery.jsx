import React from "react";
import "./Gallery.scss";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Gallery = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      type: "loop",
      height: "10rem",
      focus: "center",
      autoplay: true,
      perPage: 5,
    });
    splide.mount();
  });

  return (
    <div className="home-gallery" id="Teams">
      <div className="heading">Gallery</div>
      <div className="slideshow">
        <div class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">Slide 01</li>
              <li class="splide__slide">Slide 02</li>
              <li class="splide__slide">Slide 03</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
