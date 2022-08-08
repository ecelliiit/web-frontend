import "./Home.scss";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Moto from "./components/Moto/Moto";
import Teams from "./components/Team/Teams";
import Events from "./components/Events/Events";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Title />
      <About />
      <Moto />
      <Teams />
      <Events />
      <Gallery />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Home;
