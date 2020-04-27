import React from "react";

const db = require("../../db.json");

const About = () => {
  return (
    <section className="about">
      <p
        style={{ textTransform: "uppercase" }}
      >{`${db.profile.firstName} ${db.profile.lastName}`}</p>

      <h1>ABOUT ME</h1>
      <p>{db.about.me}</p>

      <span
        className="mark"
        style={{ width: "fit-content", marginTop: "20px" }}
      >
        <a href="rsantos.dev">YOU CAN SEE MY FULL RESUME HERE</a>
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
