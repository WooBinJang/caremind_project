import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Route, Router } from "react-router-dom";
import Scrolling from "../scrolling/Scrolling";
import Main from "../main/Main";
import Join from "../join/Join";
const Layout = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/scrolling" component={Scrolling} />
      <Footer />
    </div>
  );
};

export default Layout;
