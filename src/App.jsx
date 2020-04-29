import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import TopNav from "./components/TopNav/TopNav";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";

import "./scss/main.scss";

function App() {
  return (
    <div className="Main">
      <TopNav />
      <div className="container">
        <Navbar />

        <div className="main">
          <Router>
            <Switch>
              <Route path="/" exact component={AboutMe} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </Router>
        </div>

        <Social />
      </div>
    </div>
  );
}

export default App;
