import React from "react"
import ImageSlider from "./ImageSlider";

const Slider = ({ slideNumber }) => {

    const containerStyles = {
        width: "300px",
        height: "300px",
        margin: "2rem auto",
    };
    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slideNumber} />
            </div>
        </div>
    );
};

export default Slider;