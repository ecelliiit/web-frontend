import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Hamburger from "./components/Hamburger/Hamburger";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Navbar />
      <Hamburger />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin/login" exact element={<AdminLogin />} />
        <Route path="/*" index element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
