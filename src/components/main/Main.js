import React from "react";
import "./Main.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="Main">
      <div className="Main-box">
        <Link to="/scrolling">
          <Button variant="contained">InfiniteScroll</Button>
        </Link>
        <Link to="/join">
          <Button
            variant="contained"
            color="secondary"
            className="Main-link2-btn"
          >
            Join
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
