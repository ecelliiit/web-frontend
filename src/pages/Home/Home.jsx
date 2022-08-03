import "./Home.scss";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Moto from "./components/Moto/Moto";
import Teams from "./components/Team/Teams";
import Events from "./components/Events/Events";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Gallery/slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Title />
      <About />
      <Moto />
      <Teams />
      <Events />
      <Slider />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Home;
