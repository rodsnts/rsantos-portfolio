import React from "react";

import About from "../components/About/About";
import Gap from "../components/Gap/Gap";
import MainPicture from "../components/MainPicture/MainPicture";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";

const AboutMe = () => {
  return (
    <main className="content">
      <About />

      <Gap space="10" />

      <div className="container2">
        <MainPicture />
        <ButtonPrimary text="email me" />
      </div>
    </main>
  );
};

export default AboutMe;
