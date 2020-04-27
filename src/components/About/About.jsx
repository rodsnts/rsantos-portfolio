import React from "react";

const About = () => {
  return (
    <section className="about">
      <p>RODRIGO SANTOS</p>
      <h1>ABOUT ME</h1>
      <p>
        Hi my name is Rodrigo.{" "}
        <span className="mark">
          I'm a UI/UX designer I've beem designing for about 3 years now.
        </span>{" "}
        I love working with creative individuals that can bring strong critique
        as well as laugh at latest meme.
      </p>
      <a href="rsantos.dev">SUBSCRIBE TO OUR NEWSLETTER</a>

      <p style={{ marginTop: "45px" }}>EXPERIENCE :</p>

      <p>2016 to present PayPay inc.</p>
      <p style={{ color: "#00000077", marginTop: "0" }}>
        Sr. User experience designer, Foundations
      </p>

      <p>PROJECTS :</p>
      <p style={{ textAlign: "right", fontSize: "13px", color: "#00000088" }}>
        Establishing design system artifacts and processes to improve design
        across the rage of product design
      </p>
    </section>
  );
};

export default About;
