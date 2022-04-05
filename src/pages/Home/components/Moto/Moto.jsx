import React from "react";
import "./Moto.scss";
import DreamSVG from "../../../../assets/illustrations/lamp.svg";
import TargetSVG from "../../../../assets/illustrations/target.svg";
import RocketSVG from "../../../../assets/illustrations/rocket.svg";

const Moto = () => {
  return (
    <div className="home-moto">
      <div className="heading">We believe</div>
      <div className="motos">
        <div className="dream">
          <div>
            <img src={DreamSVG} alt="" />
          </div>
          <div>Dream</div>
        </div>
        <div className="target">
          <div>
            <img src={TargetSVG} alt="" />
          </div>
          <div>Create</div>
        </div>
        <div className="dream">
          <div>
            <img src={RocketSVG} alt="" />
          </div>
          <div>Inspire</div>
        </div>
      </div>
    </div>
  );
};

export default Moto;
