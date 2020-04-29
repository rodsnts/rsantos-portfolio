import React from "react";

import About from "../components/About/About";
import Gap from "../components/Gap/Gap";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";

import Photo1 from "../img/photo1.jpg";

const AboutMe = () => {
  return (
    <main className="content">
      <About title="About me" />

      <Gap space="10" />

      <div className="container2">
        <img src={Photo1} style={styles.photo} alt="personal" />
        <ButtonPrimary text="email me" />
      </div>
    </main>
  );
};

const styles = {
  photo: {
    width: "533px",
    height: "764px",
    objectFit: "cover",
    filter: "grayscale(100%) contrast(90%) brightness(0.8)",
  },
};

export default AboutMe;
