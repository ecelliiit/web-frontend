import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

//components
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin/login" exact element={<AdminLogin />} />
        <Route path="/*" index element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
