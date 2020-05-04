import React from "react";
import Header from "../Header/Header";

const db = require("../../db.json");

const About = () => {
  return (
    <section className="about">
      <Header title="About me" />

      <span
        className="mark"
        style={{ width: "fit-content", marginTop: "20px" }}
      >
        <a href="https://pdfhost.io/v/6hOymXPBA_Front_End_Developer.pdf">
          YOU CAN SEE MY FULL RESUME HERE
        </a>
      </span>

      <p style={{ marginTop: "45px" }}>Education :</p>

      <p>{db.education.school}</p>
      <p style={{ color: "#00000077", marginTop: "0" }}>{db.education.info}</p>

      <p>CONTRIBUTIONS :</p>
      <p style={{ textAlign: "right", fontSize: "13px", color: "#00000088" }}>
        {db.projects.info}
      </p>
    </section>
  );
};

export default About;
