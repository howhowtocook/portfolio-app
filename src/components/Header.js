import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="brand">
        <h1>LINNA XIAO</h1>
        <p className="label">Data Analyst & Web Developer</p>
      </div>
      <nav>
        <ul>
          <li className="headerLink">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>Portfolio</span>
            <ul>
              <li className="headerLink">
                <Link to="/data-analyst-portfolio">Data Analysis</Link>
              </li>
              <li className="headerLink">
                <Link to="/web-dev-portfolio">Web Development</Link>
              </li>
            </ul>
          </li>
          <li className="headerLink">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
