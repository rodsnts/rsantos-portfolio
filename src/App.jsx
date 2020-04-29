import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// import Modal from "./components/Modal/Modal";

import TopNav from "./components/TopNav/TopNav";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";

import "./scss/main.scss";

function App() {
  return (
    <Router>
      <div className="Main">
        {/* <Modal
          title="Warning"
          body="This website is under construction."
          button="I understand"
        /> */}
        <TopNav />
        <div className="container">
          <Navbar />

          <div className="main">
            <Switch>
              <Route path="/" exact component={AboutMe} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>

          <Social />
        </div>
      </div>
    </Router>
  );
}

export default App;
