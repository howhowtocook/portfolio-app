import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDevPortfolio from "./pages/WebDevPortfolio";
import DataAnalystPortfolio from "./pages/DataAnalystPortfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="frame" id="vanta">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/web-dev-portfolio"
            element={<WebDevPortfolio />}
          />
          <Route
            exact
            path="/data-analyst-portfolio"
            element={<DataAnalystPortfolio />}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
