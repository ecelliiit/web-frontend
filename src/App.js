import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Teams from "./pages/Team/Teams";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/teams" exact element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
