import "./Home.scss";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Moto from "./components/Moto/Moto";
import Team from "./components/Team/Teams"
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
      <Team />
      <Events />
      <Gallery />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Home;
