import React from "react";
import "./Main.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="Main">
      <div className="Main-box">
        <Button variant="contained">
          <Link to="/scrolling"> InfiniteScroll</Link>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="Main-link2-btn"
        >
          <Link to="/join"> Join</Link>
        </Button>
      </div>
    </div>
  );
};

export default Main;
