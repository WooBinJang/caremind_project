import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header">
      <div className="Header-box">
        <h1 className="Header-title">
          <Link to="/"> CAREMIND</Link>
        </h1>
        <nav className="Header-nav">
          <ul className="Header-list">
            <li className="Header-list-row">
              <Link to="/scrolling"> InfiniteScroll</Link>
            </li>
            <li className="Header-list-row">
              <Link to="/join">Join</Link>
            </li>
            <li className="Header-list-row">
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
