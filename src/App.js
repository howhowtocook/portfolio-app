import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDevPortfolioPage from "./pages/WebDevPortfolioPage";
import DSPortfolioPage from "./pages/DSPortfolioPage";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const vantaRef = useRef(null);

  useEffect(() => {
    const initializeVantaEffect = async () => {
      const vanta = await import("vanta/dist/vanta.fog.min");
      vantaRef.current = vanta.default({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: darkMode ? 0x161615 : 0x9999b1,
        midtoneColor: darkMode ? 0x373030 : 0xaaa3a4,
        lowlightColor: darkMode ? 0x727272 : 0xb691ab,
        baseColor: darkMode ? 0x111010 : 0xf2e9e9,
        blurFactor: 0.67,
        speed: 0.6,
      });
    };

    initializeVantaEffect();

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(true);
  };

  const toggleLightMode = () => {
    setDarkMode(false);
  };

  return (
    <Router>
      <div className="theme">
        <button
          className={`${darkMode ? "dark" : "light"}`}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </button>
        <button
          className={`${darkMode ? "dark" : "light"}`}
          onClick={toggleLightMode}
        >
          Light Mode
        </button>
      </div>
      <div className={`frame ${darkMode ? "dark" : "light"}`}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/web-dev-portfolio"
            element={<WebDevPortfolioPage />}
          />
          <Route
            exact
            path="/data-analyst-portfolio"
            element={<DSPortfolioPage />}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
