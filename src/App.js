import React, { Fragment } from "react";

import TopNav from "./components/TopNav/TopNav";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import MainPicture from "./components/MainPicture/MainPicture";
import Social from "./components/Social/Social";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
import Gap from "./components/Gap/Gap";

import "./App.scss";

function App() {
  return (
    <Fragment>
      <TopNav />
      <div className="container">
        <Navbar />

        <main className="content">
          <About />

          <Gap space="10" />

          <div className="container2">
            <MainPicture />
            <ButtonPrimary text="hire me" />
          </div>
        </main>

        <Social />
      </div>
    </Fragment>
  );
}

export default App;
