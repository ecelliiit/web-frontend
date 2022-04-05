import React from "react";
import "./Home.scss";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Moto from "./components/Moto/Moto";
import Events from "./components/Events/Events";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Gallery from "./components/Gallery/Gallery";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Title />
      <About />
      <Moto />
      <Events />
      <Gallery />
      <Map />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Home;
