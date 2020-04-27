import React from "react";

import AboutMe from "./pages/AboutMe";

import TopNav from "./components/TopNav/TopNav";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";

import "./App.scss";

function App() {
  return (
    <div className="main">
      <TopNav />
      <div className="container">
        <Navbar />

        <AboutMe />

        <Social />
      </div>
    </div>
  );
}

export default App;
