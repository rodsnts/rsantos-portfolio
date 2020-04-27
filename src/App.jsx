import React from "react";

import AboutMe from "./pages/AboutMe";

import Modal from "./components/Modal/Modal";

import TopNav from "./components/TopNav/TopNav";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";

import "./App.scss";

function App() {
  return (
    <div className="main">
      <Modal
        title="Warning"
        body="This website is under construction."
        button="I understand"
      />
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
