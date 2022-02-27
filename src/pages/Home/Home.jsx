import "./Home.scss";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Moto from "./components/Moto/Moto";

const Home = () => {
  return (
    <div className="home">
      <Title />
      <About />
      <Moto />
    </div>
  );
};

export default Home;
