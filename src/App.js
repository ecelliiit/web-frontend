import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

//components
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import About from "./pages/Home/components/About/About"
import Events from "./pages/Home/components/Events/Events"
import JoinCommunity from "./pages/Home/components/JoinCommunity/JoinCommunity";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin/login" exact element={<AdminLogin />} />
        <Route path="/*" index element={<PageNotFound />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<JoinCommunity />} />
      </Routes>
    </Router>
  );
}

export default App;
